import { injectable, inject } from 'tsyringe';

import HMPatient from '@modules/patientsHM/infra/typeorm/entities/HmPatient';
import IHMPatientRepository from '../repositories/IHMPatientRepository';

@injectable()
class ShowHMPatientService {
  constructor(
    @inject('HMPatientRepository')
    private patientRepository: IHMPatientRepository,
  ) {}

  async execute(id: number): Promise<HMPatient | undefined> {
    const patient = this.patientRepository.findById(id);

    return patient;
  }
}

export default ShowHMPatientService;
