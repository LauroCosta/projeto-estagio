import { getRepository, Repository, Not } from 'typeorm';

import IProfessionalsRepository from '@modules/professionals/repositories/IProfessionalsRepository';
import ICreateProfessionalDTO from '@modules/professionals/dtos/ICreateProfessionalDTO';

import Professional from '@modules/professionals/infra/typeorm/entities/Professional';

class ProfessionalRepository implements IProfessionalsRepository {
  private ormRepository: Repository<Professional>;

  constructor() {
    this.ormRepository = getRepository(Professional);
  }

  public async findById(id: string): Promise<Professional | undefined> {
    const professional = await this.ormRepository.findOne(id);

    return professional;
  }

  public async findByName(name: string): Promise<Professional | undefined> {
    const professional = await this.ormRepository.findOne({ where: { name } });

    return professional;
  }


  public async create(professionalData: ICreateProfessionalDTO): Promise<Professional> {
    const professional = this.ormRepository.create(professionalData);

    await this.ormRepository.save(professional);

    return professional;
  }

  public async save(professional: Professional): Promise<Professional> {
    return this.ormRepository.save(professional);
  }
}

export default ProfessionalRepository;
