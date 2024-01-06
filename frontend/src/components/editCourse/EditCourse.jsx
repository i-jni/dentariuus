// import PropTypes from 'prop-types';ange
import { useState, useEffect, useContext } from 'react';
import { getAllLevels, getCourse, updateCourse } from '../../../service/api';
import { getAllTopics } from '../../../service/api';
import { UserContext } from '../../context/UserProvider';
import { useParams } from 'react-router-dom';
import { Page, Document } from 'react-pdf';
import styles from './editCourse.module.scss';

const apiUrl = import.meta.env.VITE_API_URL;


const EditCourse = () => {

  const [course, setCourse] = useState({});

  const { user, setUser } = useContext(UserContext);
    const { id: courseId } = useParams();

  
  const [courseData, setCourseData] = useState({
    course_name: '',
    title: '',
    content: '',
    document: null,
    student_id: user?.id,
    levell_id: '',
    topics: [],
  });

  // remplissage champs avec datas actuelles:
  useEffect(() => {
    getCourse(courseId)
      .then((data) => {
        console.log("data-data.data.document!!", data.data.document);
        if (data && data.data) {
          setCourse(data.data);
          setCourseData({
            course_name: data.data.course_name,
            title: data.data.title,
            content: data.data.content,
            student_id: data.data.student_id,
            levell_id: data.data.levell_id,
            document: data.data.document || null,
            topics: data.data.topics,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [courseId]);


  const [levels, setLevels] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);


  useEffect(() => {
    getAllLevels()
      .then(data => {
        if (data && data.data) {
          setLevels(data.data);
        }
      })
      .catch(error => {
        console.error(error);
      });

    // Récupérer la liste des topicss lors du chargement
    getAllTopics()
      .then(data => {
        if (data && data.data) {
          console.log('topic', data);
          setTopics(data.data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  },[selectedTopic]);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    setCourseData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDocumentChange = e => {
    const file = e.currentTarget.files[0];
    console.log("Nouveau document sélectionné :", file);
    setCourseData(prevData => ({
      ...prevData,
      document: file,
    }));
  };
  
  

  const handleLevelChange = levelId => {
    console.log("click level");
    setCourseData(prevData => ({
      ...prevData,
      levell_id: levelId,
    }));
  };

  const handleTopicChange = selectedOptions => {
    const selectedTopics = Array.from(selectedOptions, option => option.value);
    setCourseData(prevData => ({
      ...prevData,
      topics: selectedTopics,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
  
    console.log("Données du formulaire lors de la soumission :", courseData);


    // Misee à jour le cours avec les datas du formulaire
    updateCourse(courseId, courseData)
      .then(data => {
        console.log('Cours mis à jour avec succès :', data);
      })
      .catch(error => {
        console.error('Erreur lors de la mise à jour du cours :', error);
        alert(`Erreur lors de la mise à jour du cours : ${error.message}`);
      });
  };
  
  return (
        <form className={styles.editCourseForm} onSubmit={handleSubmit} encType='multipart/form-data'>
          <label>
            Course Name:
            <input
              type="text"
              name="course_name"
              value={courseData.course_name}
              onChange={handleInputChange}
              required
            />
          </label>
    
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={courseData.title}
              onChange={handleInputChange}
              required
            />
          </label>
    
          <label>
            Content:
            <textarea
              name="content"
              value={courseData.content}
              onChange={handleInputChange}
              required
            />
      </label>

      <label>
        document actuel:
          <Document
         file={`${apiUrl}/pdf/${course.document}`}
         >
         <Page pageNumber={1} width={350} renderTextLayer={false} renderAnnotationLayer={false} />
        </Document>
      </label>
            <label>
            nouveau Document (PDF):
            {courseData.document ? (
              <p> Nom du fichier : {courseData.document.name} </p>
            ) : (
              <p> Aucun fichier sélectionné </p>
            )}
            <input
              type="file"
              accept=".pdf"
              onChange={handleDocumentChange}
              required
            />
          </label>
    
          
              <select
                name="levell_id"
                value={courseData.levell_id}
                onChange={e => handleLevelChange(e.currentTarget.value)}
                required
              >
                <option value="">Sélectionnez un niveau</option>
                {levels.map(level => (
                  <option key={level.id} value={level.id}>
                    {level.name}
                  </option>
                ))}
              </select>
    

            <label>
            Topics:
            <select
              name="topics"

              value={courseData.topics}
              onChange={e => handleTopicChange(e.currentTarget.selectedOptions)}
              required
            >
              {topics.map(topic => (
                <option key={topic.id} value={topic.id}>
                  {topic.topic_name}
                </option>
              ))}
            </select>
          </label>

   
          <button className="btn blue" type="submit">Update Course</button>
        </form>
      );
};



export default EditCourse;