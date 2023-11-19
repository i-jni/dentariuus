import express from 'express';
const errorRouter = express.Router();

errorRouter.all('*', (req, res) => res.send('Page Not found'));

export default errorRouter;