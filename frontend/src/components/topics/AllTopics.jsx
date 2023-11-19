import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAllTopics } from '../../../service/api.jsx';

const AllTopics = ({ displayAsDropdown = false, onSelectTopic }) => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');

  useEffect(() => {
    getAllTopics()
      .then((data) => {
        if (data && data.data) {
          setTopics(data.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedTopic(selectedValue);

    if (onSelectTopic) {
      onSelectTopic(selectedValue);
    }
  };

  return (
    <div>
      <h2>Liste des sujets :</h2>

      {displayAsDropdown ? (
        <select name="topic" value={selectedTopic} onChange={handleDropdownChange}>
          <option value="">Sélectionnez un sujet</option>
          {topics.map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.topic_name}
            </option>
          ))}
        </select>
      ) : (
        topics && topics.length > 0 ? (
          topics.map((topic) => (
            <p key={topic.id}>{topic.topic_name}</p>
          ))
        ) : (
          <p>Aucun sujet disponible pour le moment.</p>
        )
      )}
    </div>
  );
};

AllTopics.propTypes = {
  displayAsDropdown: PropTypes.bool,
  onSelectTopic: PropTypes.func,
};

export default AllTopics;
