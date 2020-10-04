import { getRepository, Repository } from 'typeorm';

import IHMPatientsRepository from '@modules/patientsHM/repositories/IHMPatientsRepository';

import HMPatient from '@modules/patientsHM/infra/typeorm/entities/HmPatient';

class HMPatientsRepository implements IHMPatientsRepository {
  private ormRepository: Repository<HMPatient>;

  constructor() {
    this.ormRepository = getRepository(HMPatient, 'mysql');
  }

  public async index(): Promise<HMPatient[]> {
    const patients = await this.ormRepository.find();

    return patients;
  }

  public async findById(id: number): Promise<HMPatient | undefined> {
    const patient = await this.ormRepository.findOne(id);

    return patient;
  }

  public async findByName(namePatient: string): Promise<HMPatient | undefined> {
    const patient = await this.ormRepository.findOne({
      where: { namePatient },
    });

    return patient;
  }
}

export default HMPatientsRepository;
