import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourse } from '../../../service/api';

const CourseDetail = () => {
    const [course, setCourse] = useState({});

      // {/* recuperer l'id:  de l'url*/}
    const { id } = useParams();
    
    useEffect(() => {
        getCourse(id)
            .then((data) => {
                console.log("data-courses", data);
                if (data && data.data) { 
                    setCourse(data.data);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);
    return (
        <>
            <article>
                <h2>id:{course.id}</h2>
                <h2>name:{course.course_name}</h2>
                <h2>description : { course.content}</h2>
                <h2> level: { course.level_id }</h2>
            </article>
        
        </>
    )
}

export default CourseDetail;