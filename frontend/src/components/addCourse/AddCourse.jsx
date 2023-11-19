import{ useState, useEffect } from 'react';
import { getAllLevels } from '../../../service/api.jsx'; 
import { createNewCourse } from '../../../service/api.jsx'; 

const AddCourseForm = () => {
  const [courseData, setCourseData] = useState({
    course_name: '',
    title: '',
    content: '',
    document: null, 
    student_id: null, 
    level_id: null, 
    topics: [], 
  });

  const [levels, setLevels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const levelsData = await getAllLevels();
        setLevels(levelsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching levels:', error);
      }
    };

    fetchLevels();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCourseData({
      ...courseData,
      document: file,
    });
  };

  const handleSelectChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setCourseData({
      ...courseData,
      topics: selectedOptions,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await createNewCourse(courseData);
      console.log(result);


      setCourseData({
        course_name: '',
        title: '',
        content: '',
        document: null,
        student_id: null,
        level_id: null,
        topics: [],
      });
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Course Name:
        <input type="text" name="course_name" value={courseData.course_name} onChange={handleInputChange} required />
      </label>
      <label>
        Title:
        <input type="text" name="title" value={courseData.title} onChange={handleInputChange} required />
      </label>
      <label>
        Content:
        <textarea name="content" value={courseData.content} onChange={handleInputChange} required />
      </label>
      <label>
        Document (PDF):
        <input type="file" name="document" onChange={handleFileChange} accept=".pdf" required />
      </label>
     
      <label>
        Topics:
        <select multiple name="topics" value={courseData.topics} onChange={handleSelectChange} required>
        </select>
      </label>
      <label>
        Student ID:
        <input type="number" name="student_id" value={courseData.student_id} onChange={handleInputChange} required />
      </label>
      <button type="submit">Add Course</button>
    </form>
  );
};

export default AddCourseForm;
// ajout : liste de level
// map les topics:
// remplacer student-id par le student-il acutellement login
