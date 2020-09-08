import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePlaceService from '@modules/places/services/CreatePlaceService';

export default class PlacesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;

    const createUser = container.resolve(CreatePlaceService);

    const place = await createUser.execute(description); 

    return response.json(place);
  }
}
