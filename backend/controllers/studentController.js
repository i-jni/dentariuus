import { createNewStudent, getStudent, getStudentById } from "../repositories/studentsRepo.js";

const index = (req, res) => {
    getStudent().then( data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data,
        });
    });
};

const getStudentId = (req, res) => {
    const studentId = req.params.id;

    getStudentById(studentId)
        .then(student => {
            if (!student) {
                return res.status(404).json({
                    status: 404,
                    message: "student not found!!",
                });
            }

            return res.status(200).json({
                status: 200,
                message: "OK",
                data: student,
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


// ...

const createStudent = (req, res) => {
    const { firstname, lastname, email, password, role, level_id, country_id } = req.body;

    if (!firstname || !lastname || !email || !password || !role || !level_id || !country_id) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            error: "Missing required data.",
        });
    }

    createNewStudent({ firstname, lastname, email, password, role, level_id, country_id })
        .then((newStudentId) => {
            return res.status(201).json({
                status: 201,
                message: "Created",
                data: {
                    id: newStudentId,
                }
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

// login



export { index, getStudentId, createStudent }