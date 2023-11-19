
import { addTopicsToCourse } from "../repositories/courseTopicRepo.js";
import { getCourses, getCourseById, createCourse } from "../repositories/coursesRepo.js";
// tous les cours:
const courses = (req, res) => {
    getCourses().then( data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data,
        });
    });
};

// un seul cours :

const getCourse = (req, res) => {
    const courseId = req.params.id;

    getCourseById(courseId)
        .then(course => {
            if (!course) {
                return res.status(404).json({
                    status: 404,
                    message: "Course not found!!",
                });
            }

            return res.status(200).json({
                status: 200,
                message: "OK",
                data: course,
            });
        })
        .catch(error => {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error",
                error: error.message,
            });
        });
};
const createNewCourse = async (req, res) => {
    const { course_name, title, content, document, student_id, level_id, topics } = req.body;
  
    if (!course_name || !title || !content || !document || !student_id || !level_id || !topics) {
      return res.status(400).json({
        status: 400,
        message: "Bad Request",
        error: "Missing required data.",
      });
    }
  
    try {
      const newCourseId = await createCourse({ course_name, title, content, document, student_id, level_id });
      await addTopicsToCourse(newCourseId, topics);
  
      return res.status(201).json({
        status: 201,
        message: "Created",
        data: {
          id: newCourseId,
        }
      });
    } catch (error) {
      console.error('Error creating a new course:', error);
      return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };

export { courses, getCourse, createNewCourse };

