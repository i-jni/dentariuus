import express from "express";
import {listAllCoursesAndTopics} from "../controllers/courseTopicControllers.js"

const coursesTopicRouter = express.Router();

coursesTopicRouter.get('/', listAllCoursesAndTopics);
// coursesTopicRouter.get('/:topicId/courses', getCourseByTopicID);


export default coursesTopicRouter;