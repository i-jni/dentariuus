import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { deleteCourseById, getAllLevels, getCourse, getStudent } from '../../../service/api';
import { UserContext } from '../../context/UserProvider';
import { Page, Document, pdfjs } from 'react-pdf';
import styles from './CourseDetail.module.scss';
import ShareRs from '../../atomes/shares/ShareRs';
import DeleteConfirmationModal from '../modal/Modal';

const CourseDetail = () => {
  const [course, setCourse] = useState({});
  const { user} = useContext(UserContext);
  const [student, setStudent] = useState({});
  const [levels, setLevels] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const Navigate = useNavigate()
  const [downloadCount, setDownloadCount] = useState(
    parseInt(localStorage.getItem('downloadCount')) || 0
  );

  const navigateToListe = () => {
    Navigate('/liste')
  }
  
  const apiUrl = import.meta.env.VITE_API_URL;
  const isOwner = user && user.id === course.student_id;

  const [numPages, setNumPages] = useState(null);
  

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const [isDeleted, setIsDeleted] = useState(false);

  const { id } = useParams();
  
  
    
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc =
      `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    getCourse(id)
      .then((data) => {
        // console.log("data-courses", data);
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
        handleCloseModal();
        navigateToListe();
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
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

  //  sharing:
  
  const location = useLocation();

  // Extrayez l'ID de l'URL
  const courseId = location.pathname.split('/').pop();

  // URL et titre de l'annonce

  const url = `${apiUrl}/course_detail/${courseId}`;

  // text limit
  const limitText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};
  return (
    <>
      {isDeleted && (
        <div style={{ color: 'red' }}>
          <p>Le cours a été supprimé!</p>
        </div>
      )}

      <section className={styles.courseDetailContainer}>
        <div className={styles.courseBanner}>
        <h2>{user?.firstname}</h2>
          {/* <h2>id: {course.id}</h2> */}
          <h3>{levels.find(level => level.id === course.levell_id)?.name}</h3>
          <h2> {course.course_name}</h2>
          <p>Publié par <span>{student?.firstname}</span>  </p>
        </div>

        <section className={styles.courseInfo} >
        <div className={styles.info}>
          
            <h2>Description:</h2>
            <p>{limitText(course?.content || '', 750)}</p>
          </div>
          
        <div className={styles.pdfContainer} width={350}>
          <Document file={`${apiUrl}/pdf/${course.document}`} onLoadSuccess={onDocumentLoadSuccess} width={350}>
            <Page width={350} textAlign="center" justifyContent='center' renderTextLayer={false}  pageNumber={1} renderAnnotationLayer={false} />
          </Document>
          <p>Page 1 sur {numPages}</p>
          </div>
        </section>
        
        <div className={styles.pdfDownload}>
        <button className="btn beige"> <a href={`${apiUrl}/pdf/${course.document}`} onClick={handleDownloadClick}>
            Télécharger
          </a></button>
          <p>Téléchargements : {downloadCount}</p>
        </div>

      </section>
      {isOwner && (
          <div>
          
              <button className="btn red" onClick={handleShowModal}> Supprimer </button>
            
            <Link to={`/editcourse/${course.id}`}>
              <button className="btn darkblue"> Éditer </button>
            </Link>
          </div>
      )} 
      {showModal && <DeleteConfirmationModal onCloseModal={handleCloseModal} onDelete={ handleDelete} />}
      
        <ShareRs url={url} title={course.course_name}/>
        
    </>
  );
}

export default CourseDetail;