import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStudent } from '../../../service/api.jsx';

const StudentDetail = () => {
    const [student, setstudent] = useState({});

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
    return (
        <>
            <article>
                <h2>id: {student.id}</h2>
                <h2>complet name: {student.firstname} {student.lastname}</h2>
                <h2>email: {student.email}</h2>
                <h2>country: {student.country_id}</h2>
                <h2>level: {student.level_id}</h2>
                <h2>role: {student.role}</h2>


                
            </article>
        
        </>
    )
}

export default StudentDetail;