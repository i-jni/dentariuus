import { useState, useEffect, useContext } from 'react';
import { getAllLevels } from '../../../service/api';
import { getAllTopics } from '../../../service/api';
import { createNewCourse } from '../../../service/api';
import { UserContext } from '../../context/UserProvider';
import styles from './AddCourse.module.scss'
import { TitleH2 } from '../../atomes/titles/Titles';

const AddCourse = () => {
  const { user, setUser } = useContext(UserContext);
  
  const [courseData, setCourseData] = useState({
    course_name: '',
    title: '',
    content: '',
    document: null,
    student_id: user?.id,
    levell_id: '',
    topics: [],
  });

  const [levels, setLevels] = useState([]);
  const [topics, setTopics] = useState([]);

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
          setTopics(data.data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    setCourseData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDocumentChange = e => {
    const file = e.currentTarget.files[0];
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

  const handleTopicChange = topicId => {
    console.log('click');
    setCourseData(prevData => ({
      ...prevData,
      topics: [...prevData.topics, topicId],
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
  
    if (!courseData.course_name || !courseData.title || !courseData.content || !courseData.document || !courseData.student_id || !courseData.levell_id || !courseData.topics.length) {
      console.log('datas du formulaire avant envoi :', courseData);
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }


    // create nouveau cours avec les données du form:
    createNewCourse(courseData)
      .then(data => {
        console.log('Nouveau cours créé avec succès :', data);
      })
      .catch(error => {
        console.error('Erreur addcourse lors de la création du cours :', error);
  
        alert(`Erreur addcourses lors de la création du cours : ${error.message}`);
      });
  };
  

  return (
    <div>
      
      <TitleH2 h2='Ajouter un nouveau cours'/>
      <form className={styles.addCourseForm} onSubmit={handleSubmit} encType='multipart/form-data'>
        <label>
          Nom du cours:
          <input
            type="text"
            name="course_name"
            value={courseData.course_name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Titre du cours:
          <input
            type="text"
            name="title"
            value={courseData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Contenu du cours:
          <textarea
            name="content"
            value={courseData.content}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <br />
        <label>
          Document (PDF):
          <input
            type="file"
            accept=".pdf"
            onChange={handleDocumentChange}
            required
          />
        </label>
        <br />

        <label>
          Niveau:
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
        </label>
        <br />

        {/* <label>
          topics:
          <div className={styles.topicContainer}>
            {topics.map(topic => (
              <label key={topic.id}>
                <input
                  type="checkbox"
                  value={topic.id}
                  onChange={e => handleTopicChange(e.currentTarget.value)}
                />
                {topic.topic_name}
              </label>
            ))}
          </div>
        </label> */}
        <label>
  Sujet:
  <select
    name="topic"
    value={courseData.topics.length > 0 ? courseData.topics[0] : ''}
    onChange={e => handleTopicChange([e.currentTarget.value])}
    required
  >
    <option value="" disabled>Sélectionnez un sujet</option>
    {topics.map(topic => (
      <option key={topic.id} value={topic.id}>
        {topic.topic_name}
      </option>
    ))}
  </select>
</label>
        <br />

        <button className="btn green"type="submit">Ajouter le cours</button>
      </form>
    </div>
  );
};

export default AddCourse;


