
import { useEffect, useState } from "react";
import { getAllStudents } from "../../../service/api.jsx";

import { Link } from 'react-router-dom';

const AllStudents = () => {
    const [students, setstudents] = useState([]);

    useEffect(() => {
        getAllStudents()
            .then((data) => {
                console.log("data-students", data);
                if (data && data.data) { 
                    setstudents(data.data);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    // revoir structure html: li a la place de p ect
    // est ce utile d'avoir une page studentDetail avec id?

    return (
        <div>
            <h2>Liste des students:</h2>

            {students && students.length > 0 ? (
                students.map((student) => (
                    <p key={student.id}>
                        <Link to={`/students/${student.id}`}>{student.firstname}</Link>
                    </p>
                ))
            ) : (
                <p>Aucun student disponible pour le moment.</p>
            )}
        </div>
    );
}

export default AllStudents;
