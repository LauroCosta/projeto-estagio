import { injectable, inject } from 'tsyringe';

import Professional from '@modules/professionals/infra/typeorm/entities/Professional';
import IProfessionalsRepository from '@modules/professionals/repositories/IProfessionalsRepository';
import Specialty from "@modules/specialties/infra/typeorm/entities/Specialty";

interface IRequest {
  name: string;
  specialties: Specialty[];
}

@injectable()
class CreateProfessionalService {
  constructor(
    @inject('ProfessionalsRepository')
    private professionalsRepository: IProfessionalsRepository,
  ) {}

  async execute({ name, specialties }: IRequest): Promise<Professional> {

    const professional = this.professionalsRepository.create({
      name,
      specialties
    });

    return professional;
  }
}

export default CreateProfessionalService;
