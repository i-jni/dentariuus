import { useState, useEffect } from 'react';
import { getAllLevels } from '../../../service/api';
import { getAllTopics } from '../../../service/api';
import { createNewCourse } from '../../../service/api';

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    course_name: '',
    title: '',
    content: '',
    document: null,
    student_id: 34,
    level_id: '',
    topics: [],
  });

  const [levels, setLevels] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // Récupérer la liste des niveaux lors du chargement du composant
    getAllLevels()
      .then(data => {
        if (data && data.data) {
          setLevels(data.data);
        }
      })
      .catch(error => {
        console.error(error);
      });

    // Récupérer la liste des sujets lors du chargement du composant
    getAllTopics()
      .then(data => {
        if (data && data.data) {
          setTopics(data.data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // Le tableau vide signifie que cette effectue est exécutée une seule fois après le rendu initial

  const handleInputChange = e => {
    const { name, value } = e.target;
    setCourseData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDocumentChange = e => {
    const file = e.target.files[0];
    setCourseData(prevData => ({
      ...prevData,
      document: file,
    }));
  };

  const handleLevelChange = levelId => {
    setCourseData(prevData => ({
      ...prevData,
      level_id: levelId,
    }));
  };

  const handleTopicChange = topicId => {
    setCourseData(prevData => ({
      ...prevData,
      topics: [...prevData.topics, topicId],
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
  
    // Vérifiez que toutes les données obligatoires sont présentes dans courseData
    if (!courseData.course_name || !courseData.title || !courseData.content || !courseData.document || !courseData.student_id || !courseData.level_id || !courseData.topics.length) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
  
    // Appeler la fonction pour créer un nouveau cours avec les données du formulaire
    createNewCourse(courseData)
      .then(data => {
        console.log('Nouveau cours créé avec succès :', data);
        // Rediriger ou effectuer d'autres actions après la création du cours
      })
      .catch(error => {
        console.error('Erreur lors de la création du cours :', error);
  
        // Afficher l'erreur
        alert(`Erreur lors de la création du cours : ${error.message}`);
      });
  };
  

  return (
    <div>
      <h2>Ajouter un nouveau cours</h2>
      <form onSubmit={handleSubmit}>
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

        <label>
          Étudiant ID:
          <input
            type="text"
            name="student_id"
            value={courseData.student_id}
            onChange={handleInputChange}
            required
          />
        </label> 
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
            onChange={e => handleLevelChange(e.target.value)}
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
          Sujets:
          <div>
            {topics.map(topic => (
              <label key={topic.id}>
                <input
                  type="checkbox"
                  value={topic.id}
                  onChange={e => handleTopicChange(e.target.value)}
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
