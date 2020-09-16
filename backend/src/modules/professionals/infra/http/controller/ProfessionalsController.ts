import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProfessionalService from '@modules/professionals/services/CreateProfessionalService';
import ListProfessionalsService from '@modules/professionals/services/ListProfessionalsService';

export default class ProfessionalsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProfessionals = container.resolve(ListProfessionalsService);

    const professionals = await listProfessionals.execute();

    return response.json(professionals);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, specialties } = request.body;

    const createProfessional = container.resolve(CreateProfessionalService);

    const professional = await createProfessional.execute({
      name,
      specialties,
    });

    return response.json(professional);
  }
}
