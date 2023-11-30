import express from "express";
import { courses, createNewCourse, deleteCourse, getCourse } from "../controllers/coursesControllers.js";
import multer from 'multer';

const coursesRouter = express.Router();

// multer
// original fil name:
// const multerStorageConfig = multer.diskStorage({
//     destination: 'public/img',
//     filename: (req, file, cb)=> {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.originalname + '-' + uniqueSuffix)
//     }
//   })
  
const multerService = multer({ dest: 'public/pdf' })

coursesRouter.get('/', courses);
coursesRouter.get('/:id', getCourse);

coursesRouter.post('/create', multerService.any(), createNewCourse);

// deleteCourse
coursesRouter.delete('/:id', deleteCourse);


export default coursesRouter;