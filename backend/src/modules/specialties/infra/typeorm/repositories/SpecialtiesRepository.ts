import { getRepository, Repository } from 'typeorm';

import ISpecialtiesRepository from '@modules/specialties/repositories/ISpecialtiesRepository';

import Specialty from '@modules/specialties/infra/typeorm/entities/Specialty';

class SpecialtiesRepository implements ISpecialtiesRepository {
  private ormRepository: Repository<Specialty>;

  constructor() {
    this.ormRepository = getRepository(Specialty);
  }

  public async index(): Promise<Specialty[]> {
    const specialties = await this.ormRepository.find({relations: ['professionals']});

    return specialties;
  }

  public async findById(id: string): Promise<Specialty | undefined> {
    const specialty = await this.ormRepository.findOne(id);

    return specialty;
  }

  public async findByDescription(
    description: string,
  ): Promise<Specialty | undefined> {
    const specialty = await this.ormRepository.findOne({ where: { description } });

    return specialty;
  }

  public async create(description: string): Promise<Specialty> {
    const specialty = this.ormRepository.create({ description });

    await this.ormRepository.save(specialty);

    return specialty;
  }

  public async save(specialty: Specialty): Promise<Specialty> {
    return this.ormRepository.save(specialty);
  }
}

export default SpecialtiesRepository;
