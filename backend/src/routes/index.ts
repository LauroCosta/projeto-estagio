import { Router } from 'express';
import professionalsRouter from './professionals.routes';
import placesRouter from './places.routes';
import specialtiesRouter from './specialties.routes';

const routes = Router();

routes.use('/professionals', professionalsRouter);
routes.use('/places', placesRouter);
routes.use('/specialties', specialtiesRouter);

export default routes;
