import { Router } from 'express';
import professionalsRouter from './professionals.routes';
import placesRouter from './places.routes';
import specialtiesRouter from './specialties.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/professionals', professionalsRouter);
routes.use('/places', placesRouter);
routes.use('/specialties', specialtiesRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
