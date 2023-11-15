import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getStudent, deleteStudentById } from '../../../service/api.jsx';

const StudentDetail = () => {
  const navigate = useNavigate();

    const [student, setstudent] = useState({});
    const [isDeleted, setIsDeleted] = useState(false); 
      // {/* recuperer l'id:  de l'url*/}
    const { id } = useParams();
    
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
            navigate('/'); // Redirige vers la liste des étudiants ou une autre page
          } else {
            console.error(result.message);
          }
        } catch (error) {
          console.error(error.message);
        }
      };
    return (
        <>
            <article>
                <h2>id: {student.id}</h2>
                <h2>complet name : {student.firstname} {student.lastname}</h2>
                <h2>email: {student.email}</h2>
                <h2>country: {student.country_id}</h2>
                <h2>level: {student.level_id}</h2>
                <h2>role: {student.role}</h2>

            </article>
            <section>
        {isDeleted && (
          <div style={{ color: 'red' }}>
            <p>Ton compte a été supprimé.</p>
          </div>
        )}
        <button onClick={handleDelete}>Supprimer</button>
            </section>
        
                <Link to={`/setting/${student.id}`}>editer</Link>
            
        
        </>
    )
}

export default StudentDetail;