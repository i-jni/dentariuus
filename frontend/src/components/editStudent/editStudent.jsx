

import{ useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getStudent, updateStudent, getAllLevels } from '../../../service/api.jsx';
import styles from './editStudent.module.scss';

const StudentSetting = () => {
  const [student, setStudent] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [modificationsValidees, setModificationsValidees] = useState(false);

  const { id } = useParams();
  const [levels, setLevels] = useState([]);

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
  getAllLevels()
      .then(data => {
        if (data && data.data) {
          setLevels(data.data);
        }
      })
      .catch(error => {
        console.error(error);
      });

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
  const handleLevelChange = levelId => {
    console.log("click level");
    setStudent(prevData => ({
      ...prevData,
      levell_id: levelId,
    }));
  };

  return (
    <>
      <article className={styles.container}>
        <label>Prénom </label>
        <input type="text" name="firstname" value={student.firstname} onChange={handleChange} />
        <label>Nom</label>
        <input type="text" name="lastname" value={student.lastname} onChange={handleChange} />
        <label>Email </label>
        <input type="text" name="email" value={student.email} onChange={handleChange} />
        <label>Pays </label>
        <input type="text" name="country_id" value={student.country_id} onChange={handleChange} />
        <label>Niveau </label>
        {/* <input type="text" name="levell_id" value={student.levell_id} onChange={handleChange} /> */}
        <select
                name="levell_id"
                value={student.levell_id}
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
      </article>
      <section>
        <button onClick={handleUpdate}>Enregistrer les modifications</button>
        {modificationsValidees && successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
        <Link to={`/students/${id}`}>
          <button>Retour au profil</button>
        </Link>
      </section>
    </>
  );
};

export default StudentSetting;