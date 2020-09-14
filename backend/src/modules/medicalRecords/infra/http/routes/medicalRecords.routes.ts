import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAutheticaded';
import MedicalRecordController from '../controllers/MedicalRecordController';

const medicalRecordsRouter = Router();
const medicalRecordsController = new MedicalRecordController();

medicalRecordsRouter.use(ensureAuthenticated);

medicalRecordsRouter.get('/',  medicalRecordsController.show);
medicalRecordsRouter.post('/',  medicalRecordsController.create);

export default medicalRecordsRouter;
