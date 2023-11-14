import { useEffect, useState } from "react";
import { getAllCourses } from "../../../service/api.jsx";
import { Link } from 'react-router-dom';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getAllCourses()
            .then((data) => {
                console.log("data-courses", data);
                if (data && data.data) { 
                    setCourses(data.data);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
// revoir structure html: li a la place de p ect

    return (
        <div>
            <h2>Liste des cours:</h2>

            {courses && courses.length > 0 ? (
                courses.map((course) => (
                    <p key={course.id}>
                        <Link to={`/courses/${course.id}`}>{course.title}</Link>
                    </p>
                ))
            ) : (
                <p>Aucun cours disponible pour le moment.</p>
            )}
        </div>
    );
}

export default AllCourses;
