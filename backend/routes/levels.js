import express from "express";
import { getLevel, levels } from "../controllers/levelsControllers.js";

const levelsRouter = express.Router();

levelsRouter.get('/', levels);
levelsRouter.get('/:id', getLevel);


export default levelsRouter;