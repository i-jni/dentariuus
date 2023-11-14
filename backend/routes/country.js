import express from "express";
import { countrys, getcountry } from "../controllers/countryController.js";

const countrysRouter = express.Router();

countrysRouter.get('/', countrys);
countrysRouter.get('/:id', getcountry);




export default countrysRouter;