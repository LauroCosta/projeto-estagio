import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSpecialtyService from '@modules/specialties/services/CreateSpecialtyService';

export default class SpecialtiesController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;

    const createSpecialties = container.resolve(CreateSpecialtyService);

    const specialty = await createSpecialties.execute(description);

    return response.json(specialty);
  }

}
