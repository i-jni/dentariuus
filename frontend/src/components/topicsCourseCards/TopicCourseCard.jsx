// TopicCourseCard.jsx

import React, { useEffect, useState } from 'react';
import { getAllCoursesByTopics } from '../../../service/api';
import { Link } from 'react-router-dom';
import styles from './TopicCourseCard.module.scss'; // Importez vos modules SCSS
import { TitleH2 } from '../../atomes/titles/Titles';

const TopicCourseCard = () => {
  const [coursesByTopic, setCoursesByTopic] = useState([]);

  useEffect(() => {
    getAllCoursesByTopics()
      .then((data) => {
        if (data && data.data) {
          setCoursesByTopic(data.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section>
          <TitleH2 h2='Les matières:' />
      <div className={styles['topic-card-container']}>    
      {coursesByTopic && coursesByTopic.length > 0 ? (
        coursesByTopic.map((topic) => (
          <div key={topic.id} className={styles['topic-card']}>
                <Link to={`/topics_courses/${topic.id}`}>
              <h2>{topic.topic_name}</h2>
            </Link>
          </div>
        ))
      ) : (
        <p>Aucun cours disponible pour le moment.</p>
              )}
    </div>
    </section>
  );
};

    export default TopicCourseCard;
