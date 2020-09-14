import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import placesRouter from '@modules/places/infra/http/routes/places.routes';
import specialtiesRouter from '@modules/specialties/infra/http/routes/specialties.routes';
import professionalsRouter from '@modules/professionals/infra/http/routes/professionals.routes';
import medicalRecordsRouter from '@modules/medicalRecords/infra/http/routes/medicalRecords.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/profile', profileRouter);
routes.use('/specialties', specialtiesRouter);
routes.use('/places', placesRouter);
routes.use('/medicalRecords', medicalRecordsRouter);
routes.use('/professionals', professionalsRouter);

export default routes;
