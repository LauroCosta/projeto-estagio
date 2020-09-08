import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAutheticaded';
import PlacesController from '../controllers/PlacesController';

const placesRouter = Router();
const placesController = new PlacesController();

placesRouter.use(ensureAuthenticated);

placesRouter.get('/', placesController.index);

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
