import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTopic } from '../../../service/api';

const TopicDetail = () => {
  const [topic, setTopic] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getTopic(id)
      .then((data) => {
        console.log("data-topics", data);
        if (data && data.data) {
          setTopic(data.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <article>
        <h2>ID : {topic.id}</h2>
        <h2>Nom du sujet : {topic.topic_name}</h2>
      </article>
    </>
  );
};

export default TopicDetail;
