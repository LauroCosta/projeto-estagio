import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAutheticaded';
import SpecialtiesController from '../controllers/SpecialtiesController';

const specialtiesRouter = Router();
const specialtiesController = new SpecialtiesController();

specialtiesRouter.use(ensureAuthenticated);

specialtiesRouter.get('/', specialtiesController.index);

specialtiesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().required(),
    },
  }),
  specialtiesController.create,
);


export default specialtiesRouter;
