import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePlaceService from '@modules/places/services/CreatePlaceService';
import ListPlacesService from '@modules/places/services/ListPlacesService';
import UpdatePlaceService from '@modules/places/services/UpdatePLaceService';

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

  public async update(request: Request, response: Response): Promise<Response> {

    const { place_id, description } = request.body;

    const updatePlace = container.resolve(UpdatePlaceService);

    const place = await updatePlace.execute({
      place_id,
      description,
    });

    return response.json(place);
  }
}
