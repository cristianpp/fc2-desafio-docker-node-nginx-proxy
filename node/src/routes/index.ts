import { Router } from 'express';
import peoplesRouter from './peoples.routes';

const routes = Router();

routes.use('/peoples', peoplesRouter);

export default routes;