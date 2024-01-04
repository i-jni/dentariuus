import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getStudent, deleteStudentById } from '../../../service/api.jsx';
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import styles from './StudentDetail.module.scss';

const StudentDetail = () => {
  const navigate = useNavigate();

    const [student, setstudent] = useState({});
    const [isDeleted, setIsDeleted] = useState(false); 
    const { id } = useParams();
    const { user, setUser } = useContext(UserContext);
    
    useEffect(() => {
        getStudent(id)
            .then((data) => {
                console.log("data-students!!", data);
                if (data && data.data) { 
                    setstudent(data.data);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    const handleDelete = async () => {
        try {
          const result = await deleteStudentById(id);
          if (result.success) {
            // Rediriger ou mettre à jour l'interface utilisateur après la suppression réussie
            console.log(result.message);
            localStorage.removeItem('jwtToken');
            setIsDeleted(true);
            navigate('/'); // Redirige vers la liste des étudiants ou une autre page
          } else {
            console.error(result.message);
          }
        } catch (error) {
          console.error(error.message);
        }
  };
  

  console.log("student:", student);
    return (
      <>
            <article className={styles.studentDetail}>
          <h2>id:</h2>
          <h2> {student.id}</h2>
          
          <h2>complet name :</h2>
          <h2>{student.firstname} {student.lastname} user: {user?.firstname}</h2>
          <h2>email:</h2>
          <h2>{student.email}</h2>
          
          <h2>country: </h2>
          <h2>{student.country_id}</h2>
          
          <h2>level</h2>
          <h2>{student.levell_id}</h2>
        
            </article>
            <section>
        {isDeleted && (
          <div style={{ color: 'red' }}>
            <p>Ton compte a été supprimé.</p>
          </div>
        )}
        <button onClick={handleDelete}>Supprimer</button>
        </section>
        
        {/* go to setting */}
        <Link to={`/setting/${student.id}`}>editer</Link>

        {/* logout */}
        <button onClick={() => { localStorage.removeItem('jwtToken'); navigate('/login'); }}>
        Déconnexion </button>
            
        </>
    )
}

export default StudentDetail;
// user space: profil avec info -> 2 action : suppression immediate, edition vers les setting

// setiing: tout est editable, 2 action : valider -> msg succes -> btn retour vers le profile 

// registration 
// authentifiaction 
// ok hashage 
//  ok token
// ok deconnexion
// gerer les autorisation: a faire : ok a moitié

// ----
// add courses, edit detele, afficher all courses
// ----
