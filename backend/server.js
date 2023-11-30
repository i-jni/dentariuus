import * as fs from "node:fs/promises";
import https from "node:https";
import express from "express";
// import publicRouter from "./routes/public.js";
import * as dotenv from 'dotenv';
import cors from 'cors';
import studentRouter from "./routes/student.js";
import coursesRouter from "./routes/courses.js";
import topicsRouter from "./routes/topics.js";
import levelsRouter from "./routes/levels.js";
import coursesTopicRouter from "./routes/coursesTopic.js"
import countrysRouter from "./routes/country.js";
import errorRouter from "./routes/error.js";

// configuration du serveur
const options = {
	key: await fs.readFile("ssl/key.pem"),
	cert: await fs.readFile("ssl/cert.pem"),
};


// créer une application express
const app = express();

// routage de l'application
const router = express.Router();

app.use('/api', router);

router.use(cors());

// dossier des ressources externes
router.use(express.static("public"));


// acceder a une propriete body d'une req dont les donné sont en json
router.use(express.json());


// appel des routeurs avec un préfixe
router.use("/student", studentRouter)
router.use("/courses", coursesRouter)
router.use("/topics", topicsRouter);
router.use("/levels", levelsRouter)
router.use("/country", countrysRouter )

// router.use('/topics_courses', coursesTopicRouter);

// router.get('/', (req, res) => res.send('ok'));

// placer cette route après toutes les autres routes:
router.use(errorRouter);

// création du serveur
const server = https.createServer(options, app);

export default server;