import  { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAllCoursesByTopicsId } from '../../../service/api';

const TopicCourseDetail = () => {
  const [coursesByTopic, setCoursesByTopic] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getAllCoursesByTopicsId(id)
      .then((data) => {
        console.log("data-courses-by-topic-id", data);
        if (data && data.data) {
          setCoursesByTopic(data.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
          <h2>Matière: {coursesByTopic.topic_name} </h2>
          <h2> liste des cours :</h2>
          
      {coursesByTopic.courses && coursesByTopic.courses.length > 0 ? (
        coursesByTopic.courses.map((course) => (
            
          <div key={course.id}>
                <Link to={`/courses/${course.id}`}>{course.title}</Link>
            {/* Ajouter d'autre data */}
          </div>
        ))
      ) : (
        <p>Aucun cours disponible pour le moment.</p>
      )}
    </>
  );
};

export default TopicCourseDetail;
