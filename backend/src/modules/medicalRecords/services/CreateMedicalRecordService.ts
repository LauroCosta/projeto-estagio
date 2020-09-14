import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import MedicalRecord from '@modules/medicalRecords/infra/typeorm/entities/MedicalRecord';
import IMedicalRecordsRepository from '../repositories/IMedicalRecordsRepository';
import Place from '@modules/places/infra/typeorm/entities/Place';

interface IRequest {
  sequence: number;
  name: string;
  mother_name: string;
  gender: string;
  status: string;
  isActive: boolean;
  birth_date: Date;
  place: Place;
}

@injectable()
class CreateMedicalRecordService {
  constructor(
    @inject('MedicalRecordsRepository')
    private medicalRecordsRepository: IMedicalRecordsRepository,

  ) {}

  async execute(medicalRecordData: IRequest): Promise<MedicalRecord> {
    const checkMedicalRecordExists = await this.medicalRecordsRepository.findBySequenceNumber(
      medicalRecordData.sequence
    );

    if (checkMedicalRecordExists) {
      throw new AppError('Medical record exists');
    }

    const medicalRecord = this.medicalRecordsRepository.create(medicalRecordData);

    return medicalRecord;
  }
}

export default CreateMedicalRecordService;
