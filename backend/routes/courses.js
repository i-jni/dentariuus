import express from "express";
import { courses, createNewCourse, getCourse } from "../controllers/coursesControllers.js";

const coursesRouter = express.Router();

coursesRouter.get('/', courses);
coursesRouter.get('/:id', getCourse);

coursesRouter.post('/create', createNewCourse);

export default coursesRouter;