import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getStudent, deleteStudentById, getCountryById } from '../../../service/api.jsx';
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import styles from './StudentDetail.module.scss';
import DeleteConfirmationModal from '../modal/Modal.jsx';


const StudentDetail = () => {
  const navigate = useNavigate();

    const [student, setstudent] = useState({});
    const [isDeleted, setIsDeleted] = useState(false); 
  const { id } = useParams();
  const [countryName, setCountryName] = useState('');

  const { user, setUser } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  
    
    useEffect(() => {
        getStudent(id)
            .then((data) => {
                if (data && data.data) { 
                  setstudent(data.data);
                  getCountryName(data.data.country_id);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);
    const handleShowModal = () => {
      setShowModal(true);
    };
    const handleCloseModal = () => {
      setShowModal(false);
    };

    const handleDelete = async () => {
        try {
          const result = await deleteStudentById(id);
          if (result.success) {
            // Rediriger ou mettre à jour l'interface utilisateur après la suppression réussie
            console.log(result.message);
            localStorage.removeItem('jwtToken');
            setIsDeleted(true);
            handleCloseModal();
            handleLogout(true)
            navigate('/'); 
          } else {
            console.error(result.message);
          }
        } catch (error) {
          console.error(error.message);
        }
  };

  const getCountryName = async (id) => {
    try {
      const countryData = await getCountryById(id);
      if (countryData && countryData.data) {
        setCountryName(countryData.data.name);
      }
    } catch (error) {
      console.log('rien');
      console.error(error.message);
    }
  };


  const isOwner = user && user.id === student.id;

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setUser(null);
    navigate('/login')
  }
  

    return (
      <>
        {isOwner && (
          <>
            <article className={styles.studentDetail}>
          
          <h2>Nom complet :</h2>
          <p>{student.firstname} {student.lastname}</p>
          <h2>E-mail:</h2>
          <p>{student.email}</p>
          
          <h2>Pays: </h2>
          <p>{countryName}</p>
          
          <h2>Niveau d'étude:</h2>
          <p>  {student.levell_id}  </p>
        
            </article>
            <section>
        {isDeleted && (
          <div style={{ color: 'red' }}>
            <p>Ton compte a été supprimé !</p>
          </div>
          )}
          <div></div>
              <button className="btn red" onClick={handleShowModal}>Supprimer</button>
              {showModal && <DeleteConfirmationModal onCloseModal={handleCloseModal} onDelete={ handleDelete} />}
        
        
        {/* go to setting */}
        <button className="btn darkblue" ><Link to={`/profil_setting/${student.id}`}>Editer</Link></button>

        {/* logout */}
        
            </section>
            </>
        )} 
        {/* <button className="btn red" onClick={handleLogout}>
        Déconnexion </button> */}
        </>
    )
}

export default StudentDetail;
