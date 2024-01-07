// TopicsList.jsx

import { useEffect, useState } from 'react';
import { getAllCoursesByTopics } from '../../../service/api';
import { Link } from 'react-router-dom';
import styles from './TopicListe.module.scss'; 

const TopicListe = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAllCoursesByTopics()
      .then((data) => {
        if (data && data.data) {
          setTopics(data.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.topicsList}>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link to={`/topics_courses/${topic.id}`}>{topic.topic_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default TopicListe;
