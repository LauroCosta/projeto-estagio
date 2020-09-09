import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProfessionalService from '@modules/professionals/services/CreateProfessionalService';

export default class  ProfessionalsController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, specialties } = request.body;

    const createProfessional = container.resolve(CreateProfessionalService);

    const professional = await createProfessional.execute({name, specialties});

    return response.json(professional);
  }

}
