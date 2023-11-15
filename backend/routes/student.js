import express from "express";
import { createStudent, getStudentId, index, deleteStudent, updateStudent } from "../controllers/studentController.js";
import { loginUser } from "../controllers/authController.js";


const studentRouter = express.Router();

studentRouter.get('/', index);
studentRouter.get('/:id', getStudentId);
studentRouter.post('/', createStudent);
// login
studentRouter.post('/login', loginUser);

// delete:
studentRouter.delete('/:id', deleteStudent);
// edit:
studentRouter.put('/:id', updateStudent);

export default studentRouter;