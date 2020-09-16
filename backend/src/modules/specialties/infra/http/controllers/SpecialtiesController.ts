import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSpecialtyService from '@modules/specialties/services/CreateSpecialtyService';
import ListSpecialtiesService from '@modules/specialties/services/ListSpecialtiesService';

export default class SpecialtiesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listSpecialties = container.resolve(ListSpecialtiesService);

    const specialties = await listSpecialties.execute();

    return response.json(specialties);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;

    const createSpecialties = container.resolve(CreateSpecialtyService);

    const specialty = await createSpecialties.execute(description);

    return response.json(specialty);
  }
}
