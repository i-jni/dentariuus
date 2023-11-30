import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteCourseById, getCourse } from '../../../service/api';
import { UserContext } from '../../context/UserProvider';

const CourseDetail = () => {
    const [course, setCourse] = useState({});
    const { user, setUser } = useContext(UserContext);
    const Navigate = useNavigate()


    const [isDeleted, setIsDeleted] = useState(false); 

    const { id } = useParams();
    
    useEffect(() => {
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

    const handleDelete = async () => {
        try {
            const result = await deleteCourseById(id);
            // console.log("click delet");
          if (result.success) {
            console.log(result.message);
            setIsDeleted(true);
            Navigate('/');
          } else {
            console.error(result.message);
          }
        } catch (error) {
          console.error(error.message);
        }
  };
    return (
        <>
            {isDeleted ? (
          <div style={{ color: 'red' }}>
            <p>Ton cours a été supprimé!</p>
          </div>
            ):
                <p>pas supprimer!</p>
        }
            <article>
                <h2>{ user?.firstname}</h2>
                <h2>id:{course.id}</h2>
                <h2>name:{course.course_name}</h2>
                <h2>description : { course.content}</h2>
                <h2> level: {course.level_id}</h2>
                <h2> student: {course.student_id}</h2>

                
            </article>
            <div>
                <Link to={'/courses'}> <button onClick={handleDelete}> Delete  </button></Link>
            </div>
        
        </>
    )
}

export default CourseDetail;