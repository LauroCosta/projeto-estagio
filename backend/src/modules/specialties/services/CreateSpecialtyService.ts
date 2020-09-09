import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Specialty from '@modules/specialties/infra/typeorm/entities/Specialty';
import ISpecialtiesRepository from '../repositories/ISpecialtiesRepository';

@injectable()
class CreateSpecialtyService {
  constructor(
    @inject('SpecialtiesRepository')
    private specialtiesRepository: ISpecialtiesRepository,
  ) {}

  async execute(description: string): Promise<Specialty> {
    const checkSpecialtyExists = await this.specialtiesRepository.findByDescription(
      description,
    );

    if (checkSpecialtyExists) {
      throw new AppError('Specialty already registered.');
    }

    const specialty = this.specialtiesRepository.create(description);

    return specialty;
  }
}

export default CreateSpecialtyService;
