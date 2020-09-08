import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import PlacesController from '../controllers/PlacesController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAutheticaded';

const placesRouter = Router();
const placesController = new PlacesController();

placesRouter.use(ensureAuthenticated);

placesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().required(),
    },
  }),
  placesController.create,
);

export default placesRouter;
