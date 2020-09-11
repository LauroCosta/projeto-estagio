import { injectable, inject } from 'tsyringe';

import Specialty from '@modules/specialties/infra/typeorm/entities/Specialty';
import ISpecialtiesRepository from '../repositories/ISpecialtiesRepository';

@injectable()
class ListSpecialtiesService {
  constructor(
    @inject('SpecialtiesRepository')
    private specialtiesRepository: ISpecialtiesRepository,
  ) {}

  async execute(): Promise<Specialty[]> {
    const places = this.specialtiesRepository.index();

    return places;
  }
}

export default ListSpecialtiesService;
