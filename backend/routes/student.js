import express from "express";
import { createStudent, getStudentId, index } from "../controllers/studentController.js";
import { loginUser } from "../controllers/authController.js";


const studentRouter = express.Router();

studentRouter.get('/', index);
studentRouter.get('/:id', getStudentId);
studentRouter.post('/', createStudent);

studentRouter.post('/login', loginUser);

export default studentRouter;