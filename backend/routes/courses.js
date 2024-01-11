import express from "express";
import { courses, createNewCourse, deleteCourse, getCourse, search, updateCourse} from "../controllers/coursesControllers.js";
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

coursesRouter.post('/create', multerService.any(), createNewCourse);
coursesRouter.get('/', courses);
coursesRouter.get('/:id', getCourse);


// deleteCourse
coursesRouter.delete('/:id', deleteCourse);
// update
coursesRouter.put('/update/:id', multerService.any(), updateCourse);

// search 
coursesRouter.get('/search/:query', search);


export default coursesRouter;