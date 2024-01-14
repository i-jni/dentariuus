import  { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAllCoursesByTopicsId } from '../../../service/api';
import styles from './CourseTopicCard.module.scss';
import { TitleH2, TitleH3 } from '../../atomes/titles/Titles';

const TopicCourseDetail = () => {
  const [coursesByTopic, setCoursesByTopic] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getAllCoursesByTopicsId(id)
      .then((data) => {
        // console.log("data-courses-by-topic-id", data);
        if (data && data.data) {
          setCoursesByTopic(data.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const limitText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

  
  return (
  <>
    <TitleH2 h2={`Matiere: ${coursesByTopic.topic_name}`}/>
  <section className={styles.containerCards}>

    {coursesByTopic.courses && coursesByTopic.courses.length > 0 ? (
      coursesByTopic.courses.map((course) => (
        <div key={course.id} className={styles.itemCard}>
          <div className={styles.img}></div>
          <div className='centered'>
            <TitleH3 h3={limitText(course.course_name, 100)} />
            <p>{limitText(course.content, 120)}</p>
            <Link to={`/course_detail/${course.id}`}>
              <button className="btn darkblue">Voir plus</button>
            </Link>
          </div>
        </div>
      ))
    ) : (
      <p>Matières pas disponibles pour le moment.</p>
    )}
      </section>
      </>
);
};

export default TopicCourseDetail;