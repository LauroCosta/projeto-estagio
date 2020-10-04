import { injectable, inject } from 'tsyringe';

import MedicalRecord from '@modules/medicalRecords/infra/typeorm/entities/MedicalRecord';
import IMedicalRecordsRepository from '../repositories/IMedicalRecordsRepository';

@injectable()
class ShowMedicalRecordsService {
  constructor(
    @inject('MedicalRecordsRepository')
    private medicalRecordsRepository: IMedicalRecordsRepository,
  ) {}

  async execute(sequence: number): Promise<MedicalRecord | undefined> {
    const medicalRecord = this.medicalRecordsRepository.findBySequenceNumber(
      sequence,
    );

    return medicalRecord;
  }
}

export default ShowMedicalRecordsService;
