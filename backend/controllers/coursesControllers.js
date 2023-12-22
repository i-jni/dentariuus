
import { updateTopicsOfCourse } from "../repositories/courseTopicRepo.js";
import { getCourses, getCourseById, createCourse, deleteCourseById, updateCourseById } from "../repositories/coursesRepo.js";
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
    const { course_name, title, content, student_id, levell_id, topics } = req.body;
  
    // verifs
    const file = req.files[0];
  
    const newFileName = `${file.filename}.pdf`;
  
    await fs.rename(file.path, `${file.destination}/${newFileName}`);
  
    // console.log(req.body, "req.body");
    
    if (!course_name || !title || !content || !student_id || !levell_id || !topics) {
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
        levell_id,
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
  

const updateCourse = async (req, res) => {
  const { course_name, title, content, student_id, levell_id, topics } = req.body;
  const courseId = req.params.id;

  // Vérifiez si le cours existe
  const course = await getCourseById(courseId);
  if (!course) {
    return res.status(404).json({
      status: 404,
      message: "Course not found",
    });
  }

  // Si un fichier est présent dans la requête, effectuez les validations nécessaires
  const file = req.files[0];
  let newFileName;
  if (file) {
    // Validez que le fichier est un PDF, ajustez cette vérification selon vos besoins
    if (file.mimetype !== 'application/pdf') {
      return res.status(400).json({
        status: 400,
        message: "Invalid file format. Please provide a PDF file.",
      });
    }

    newFileName = `${file.filename}.pdf`;
    await fs.rename(file.path, `${file.destination}/${newFileName}`);
  }

  try {
    // Mettez à jour le cours
    await updateCourseById(courseId, [course_name, title, content, newFileName, student_id, levell_id]);

    // Mettre à jour les sujets liés au cours
    await updateTopicsOfCourse(courseId, topics);

    return res.status(200).json({
      status: 200,
      message: "Course updated successfully",
    });
  } catch (error) {
    console.error("Controller: Error updating course:", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export { courses, getCourse, createNewCourse, deleteCourse, updateCourse };

