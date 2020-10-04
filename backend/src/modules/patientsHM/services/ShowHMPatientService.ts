import { injectable, inject } from 'tsyringe';

import HMPatient from '@modules/patientsHM/infra/typeorm/entitie/HMPatient';
import IHMPatientsRepository from '../repositories/IHMPatientsRepository';

@injectable()
class ShowHMPatientService {
  constructor(
    @inject('HMPatientsRepository')
    private patientsRepository: IHMPatientsRepository,
  ) {}

  async execute(id: number): Promise<HMPatient | undefined> {
    const patient = this.patientsRepository.findById(id);

    return patient;
  }
}

export default ShowHMPatientService;
