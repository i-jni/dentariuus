import express from "express";
import { createStudent, getStudentId, index } from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.get('/', index);
studentRouter.get('/:id', getStudentId);
studentRouter.post('/', createStudent);


export default studentRouter;