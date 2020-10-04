import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAutheticaded';
import HMPatientController from '../controllers/HMPatientController';

const patientsHMRouter = Router();
const patientsHMController = new HMPatientController();

patientsHMRouter.use(ensureAuthenticated);

patientsHMRouter.get('/', patientsHMController.show);

export default patientsHMRouter;
