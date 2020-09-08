import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePlaceService from '@modules/places/services/CreatePlaceService';
import ListPlacesService from '@modules/places/services/ListPlacesService';

export default class PlacesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listPLaces = container.resolve(ListPlacesService);

    const places = await listPLaces.execute();

    return response.json(places);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;

    const createPlaces = container.resolve(CreatePlaceService);

    const place = await createPlaces.execute(description);

    return response.json(place);
  }
}
