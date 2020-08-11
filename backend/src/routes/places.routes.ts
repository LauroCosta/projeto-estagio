import { Router } from 'express';
import CreatePlaceService from '../services/CreatePlaceService';

const placesRouter = Router();

placesRouter.post('/', async (request, response) => {
  const { description } = request.body;

  const createPlace = new CreatePlaceService();

  const place = await createPlace.execute({
    description,
  });

  return response.json(place);
});

export default placesRouter;
