import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAutheticaded';
import ProfessionalsController from '../controller/ProfessionalsController';

const professionalsRouter = Router();
const professionalsController = new ProfessionalsController();

professionalsRouter.use(ensureAuthenticated);

professionalsRouter.post(
  '/',
  professionalsController.create,
);


export default professionalsRouter;
