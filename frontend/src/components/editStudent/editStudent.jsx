

import{ useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getStudent, updateStudent } from '../../../service/api.jsx';

const StudentSetting = () => {
  const [student, setStudent] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [modificationsValidees, setModificationsValidees] = useState(false);

  const { id } = useParams();
//   const navigate = useNavigate();

  useEffect(() => {
    getStudent(id)
      .then((data) => {
        console.log("data-students!!", data);
        if (data && data.data) {
          setStudent(data.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleUpdate = async () => {
    try {
        const result = await updateStudent(id, student);
        if (result.success) {
            setSuccessMessage('Modifications enregistrées avec succès');
            setModificationsValidees(true);
          
            console.log(result.message);
            // setTimeout(() => {
            //     navigate(`/students/${id}`);
            // }, 2000);        
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChange = (e) => {
    setStudent((prevStudent) => ({
      ...prevStudent,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <article>
        <h2>Modifier étudiant</h2>
        <label>Prénom: <input type="text" name="firstname" value={student.firstname} onChange={handleChange} /></label>
        <label>Nom: <input type="text" name="lastname" value={student.lastname} onChange={handleChange} /></label>
        <label>Email: <input type="text" name="email" value={student.email} onChange={handleChange} /></label>
        <label>Pays: <input type="text" name="country_id" value={student.country_id} onChange={handleChange} /></label>
        <label>Niveau: <input type="text" name="level_id" value={student.level_id} onChange={handleChange} /></label>
      </article>
          <section>
              <button onClick={handleUpdate} >Enregistrer les modifications</button>
        {modificationsValidees && successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
              
              <Link to={`/students/${id}`}>
              <button>retour au profil</button>
                  </Link>
      </section>
    </>
  );
};

export default StudentSetting;