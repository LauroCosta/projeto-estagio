import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAutheticaded';
import AttendancesController from '../controllers/AttendancesController';

const attendancesRouter = Router();
const attendancesController = new AttendancesController();

attendancesRouter.use(ensureAuthenticated);

attendancesRouter.get('/', attendancesController.listAttendancesDay);
attendancesRouter.post('/', attendancesController.create);

export default attendancesRouter;
