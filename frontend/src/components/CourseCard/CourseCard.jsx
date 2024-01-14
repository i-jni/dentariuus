import styles from './CourseCard.module.scss';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getAllCourses } from '../../../service/api';
import { TitleH3 } from '../../atomes/titles/Titles';

const CourseCard = () => {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllCourses()
            .then((data) => {
                // console.log("data-courses", data);
                if (data && data.data) { 
                    setCourses(data.data);
                } else {
                    setError("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
                setError("Error fetching data");
            });
    }, []);
    const limitText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };
    return (
        <div className={styles.containerCards}>
            {error ? (
                <p>{error}</p>
            ) : courses && courses.length > 0 ? (
                courses.map((course) => (
                    <div key={course.id} className={styles.itemCard}>
                        <div className={styles.img}></div>
                        <div className='centered'>
                            <TitleH3 h3={limitText (course.course_name, 100)}/>
                            <p>
                            {limitText (course.content, 120)}
                            </p>
                            <Link to={`/course_detail/${course.id}`}><button className="btn darkblue">Voir plus</button></Link>
                        </div>
                    </div>
                ))
            ) : (
                <p>Aucun cours disponible pour le moment.</p>
            )}
        </div>
    );
};

export default CourseCard;