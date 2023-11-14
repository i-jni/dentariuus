
import { getCourses, getCourseById } from "../repositories/coursesRepo.js";
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

export { courses, getCourse };

