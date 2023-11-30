
import { addTopicsToCourse } from "../repositories/courseTopicRepo.js";
import { getCourses, getCourseById, createCourse, deleteCourseById } from "../repositories/coursesRepo.js";
import fs from 'fs/promises';


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
    const { course_name, title, content, student_id, level_id, topics } = req.body;
  
    // verifs
    const file = req.files[0];
  
    const newFileName = `${file.filename}.pdf`;
  
    await fs.rename(file.path, `${file.destination}/${newFileName}`);
  
    // console.log(req.body, "req.body");
    
    if (!course_name || !title || !content || !student_id || !level_id || !topics) {
      return res.status(400).json({
        status: 400,
        message: "Bad Request",
        error: "Missing required data",
      });
    }
  
    try {
      const newCourseId = await createCourse([
        course_name,
        title,
        content,
        newFileName, 
        student_id,
        level_id,
      ]);
      await addTopicsToCourse(newCourseId, topics);
  
      return res.status(201).json({
        status: 201,
        message: "Created !",
        data: {
          id: newCourseId,
        },
      });
    } catch (error) {
      console.error('Controller: Error creating a new course:', error);
      return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
        error: error.message,
      });
    }
};
  
// DELETE
const deleteCourse = async (req, res) => {
  const courseId = req.params.id;
  const course = await getCourseById(courseId);

// console.log('reqqq', req);
  try {
    const deleted = await deleteCourseById(courseId);
    const fileName = course.document;
    // console.log(course, "COURSE file");

    await fs.rm(`public/pdf/${fileName}`);
    if (deleted) {
      return res.status(200).json({
        status: 200,
        message: "course deleted successfully",
      });
    } else {
      return res.status(404).json({
        status: 404,
        message: "course not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
  

export { courses, getCourse, createNewCourse, deleteCourse };

