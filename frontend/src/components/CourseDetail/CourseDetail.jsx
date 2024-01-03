import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteCourseById, getAllLevels, getCourse, getLevel, getStudent } from '../../../service/api';
import { UserContext } from '../../context/UserProvider';
import { Page, Document, pdfjs } from 'react-pdf';
import styles from './CourseDetail.module.scss';

const CourseDetail = () => {
    const [course, setCourse] = useState({});
  const { user, setUser } = useContext(UserContext);
  const [student, setStudent] = useState({});
  const [levels, setLevels] = useState([]);

    const Navigate = useNavigate()
    const [downloadCount, setDownloadCount] = useState(
      parseInt(localStorage.getItem('downloadCount')) || 0
  );
  
const apiUrl = import.meta.env.VITE_API_URL;
const isOwner = user && user.id === course.student_id;

  const [numPages, setNumPages] = useState(null);
  

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    const [isDeleted, setIsDeleted] = useState(false); 

  const { id } = useParams();
  
  
    
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
        getCourse(id)
            .then((data) => {
                console.log("data-courses", data);
                if (data && data.data) { 
                  setCourse(data.data);
                }
            })
            .catch((error) => {
                console.error(error);
            });
  }, [id]);

  
  const handleDownloadClick = () => {
    const updatedDownloadCount = downloadCount + 1;
    setDownloadCount(updatedDownloadCount);
    localStorage.setItem('downloadCount', updatedDownloadCount);
  };

    const handleDelete = async () => {
        try {
            const result = await deleteCourseById(id);
            // console.log("click delet");
          if (result.success) {
            console.log(result.message);
            setIsDeleted(true);
            Navigate('/');
          } else {
            console.error(result.message);
          }
        } catch (error) {
          console.error(error.message);
        }
  };
  const getStudentDetails = async (studentId) => {
    try {
      const studentData = await getStudent(studentId);
      if (studentData && studentData.data) {
        setStudent(studentData.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    if (course.student_id) {
      getStudentDetails(course.student_id);
    }
  }, [course.student_id]);

  const getLevelDetails = async (levelId) => {
    try {
      const levelData = await getAllLevels(levelId);
      if (levelData && levelData.data) {
        console.log('Level data:', levelData);
        setLevels(levelData.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };


  useEffect(() => {
    if (course.levell_id) {
      getLevelDetails(course.levell_id);
    }
  }, [course.levell_id]);

 
 
  
  return (
    <>
      {isDeleted && (
        <div style={{ color: 'red' }}>
          <p>Ton cours a été supprimé!</p>
        </div>
      )}
      <section className={styles.courseDetailContainer}>
        <div className={styles.courseBanner}>
        <h2>{user?.firstname}</h2>
       
          <h2>id: {course.id}</h2>
          <h2> {course.course_name}</h2>
          <h2>Publié par <span>{student.firstname}</span>  </h2>
        </div>
        <section className={styles.courseInfo} >
        <div className={styles.info}>
          
          <h2>description: {course.content}</h2>
          <h2>level: {levels.find(level => level.id === course.levell_id)?.name}</h2>
        </div>
        <div className={styles.pdfContainer}>
          <Document file={`${apiUrl}/pdf/${course.document}`} onLoadSuccess={onDocumentLoadSuccess}>
            <Page width={100} renderTextLayer={false}  pageNumber={1} renderAnnotationLayer={false} />
          </Document>
          <p>Page 1 of {numPages}</p>
          </div>
          </section>
        <div className={styles.pdfDownload}>
        <button> <a href={`${apiUrl}/pdf/${course.document}`} onClick={handleDownloadClick}>
            Télécharger
          </a></button>
          <p>Téléchargements : {downloadCount}</p>
        </div>
        
      </section>
      {isOwner && (
          <>
            <Link to={'/courses'}>
              <button onClick={handleDelete}> Supprimer </button>
            </Link>
            <Link to={`/editcourse/${course.id}`}>
              <button> Éditer </button>
            </Link>
          </>
        )}
        
    </>
  );
}

export default CourseDetail;