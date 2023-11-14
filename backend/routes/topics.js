import express from "express";
import { topicsCourses, getTopic, listTopics, topicsCoursesById } from "../controllers/topicsControllers.js";

const topicsRouter = express.Router();

// liste des topics et leurs cours:
topicsRouter.get('/courses', topicsCourses);
// appeler une table topic unique avec ses course: exemple id1 biiologie et tout les cours de bio
topicsRouter.get('/courses/:id', topicsCoursesById);

// liste des topics seules:
topicsRouter.get('/liste', listTopics);
// via un id specifique:
topicsRouter.get('/liste/:id', getTopic);

export default topicsRouter;