import express from "express";
import { courses, getCourse } from "../controllers/coursesControllers.js";

const coursesRouter = express.Router();

coursesRouter.get('/', courses);
coursesRouter.get('/:id', getCourse);


export default coursesRouter;