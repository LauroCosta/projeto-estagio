import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAutheticaded';
import CreateMedicalRecordController from '../controllers/CreateMedicalRecordController';

const medicalRecordsRouter = Router();
const medicalRecordsController = new CreateMedicalRecordController();

medicalRecordsRouter.use(ensureAuthenticated);

medicalRecordsRouter.post('/',  medicalRecordsController.create);

export default medicalRecordsRouter;
