import { useState, useEffect, useContext } from 'react';
import { getAllLevels } from '../../../service/api';
import { getAllTopics } from '../../../service/api';
import { createNewCourse } from '../../../service/api';
import { UserContext } from '../../context/UserProvider';
import Navigation from '../navigation/Navigation';

const AddCourse = () => {
  const { user, setUser } = useContext(UserContext);
  
  const [courseData, setCourseData] = useState({
    course_name: '',
    title: '',
    content: '',
    document: null,
    student_id: user?.id,
    level_id: '',
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
  
  // const handleStudentChange = () => {
  //   console.log('user.id avant la mise à jour :', user.id);
  //   setCourseData(prevData => ({
  //     ...prevData,
  //     student_id: user.id,
  //   }));
  //   console.log('student_id après la mise à jour :', courseData.student_id);
  // };
  
  const handleLevelChange = levelId => {
    console.log("click level");
    setCourseData(prevData => ({
      ...prevData,
      level_id: levelId,
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
  
    if (!courseData.course_name || !courseData.title || !courseData.content || !courseData.document || !courseData.student_id || !courseData.level_id || !courseData.topics.length) {
      console.log('datas du formulaire avant envoi :', courseData);
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    // const formData = new FormData();
    // formData.append('course_name', courseData.course_name);
    // formData.append('title', courseData.title);
    // formData.append('content', courseData.content);
    // formData.append('document', courseData.document);
    // formData.append('student_id', courseData.student_id);
    // formData.append('level_id', courseData.level_id);
    // formData.append('topics', courseData.topics);

    // console.log(formData);

  
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
      <Navigation />
      
      <h2>Ajouter un nouveau cours</h2>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
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

        {/* <label>
          studentID:
          <input
            name="student_id"
            value={user?.id}
            onChange={handleStudentChange}
            required
          />
        </label>  */}
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
            name="level_id"
            value={courseData.level_id}
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

        <label>
          topics:
          <div>
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
        </label>
        <br />

        <button type="submit">Ajouter le cours</button>
      </form>
    </div>
  );
};

export default AddCourse;

// ajout : liste de level
// map les topics:
// remplacer student-id par le student-il acutellement login
