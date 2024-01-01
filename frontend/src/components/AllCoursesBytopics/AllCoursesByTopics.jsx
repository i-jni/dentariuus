import { useEffect, useState } from 'react';
import { getAllCoursesByTopics } from '../../../service/api';
import { Link } from 'react-router-dom';

const AllCoursesByTopic = () => {
  const [coursesByTopic, setCoursesByTopic] = useState([]);

  useEffect(() => {
    getAllCoursesByTopics()
      .then((data) => {
        // console.log("data-courses-by-topic", data);
        if (data && data.data) {
          setCoursesByTopic(data.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h2>Liste des cours par sujet :</h2>
      {coursesByTopic && coursesByTopic.length > 0 ? (
        coursesByTopic.map((topic) => (
          <div key={topic.id}>
            <Link to={`/topics_courses/${topic.id}`}>
              <h3>Sujet : {topic.topic_name}</h3></Link>

            <ul>
              {topic.courses.map((course) => (
                <li key={course.id}>
                  {/* <p>ID du cours : {course.id}</p> */}
                  <p key={course.id}>
                        <Link to={`/courses/${course.id}`}>{course.title}</Link>
                    </p>
                 
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>Aucun cours disponible pour le moment.</p>
      )}
    </>
  );
};

export default AllCoursesByTopic;
