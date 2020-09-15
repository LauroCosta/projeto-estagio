import { getRepository, Repository, Not } from 'typeorm';

import IMedicalRecordsRepository from '@modules/medicalRecords/repositories/IMedicalRecordsRepository';
import ICreateMedicalRecordDTO from '@modules/medicalRecords/dtos/ICreateMedicalRecordDTO';

import MedicalRecord from '@modules/medicalRecords/infra/typeorm/entities/MedicalRecord';

class MedicalRecordsRepository implements IMedicalRecordsRepository {
  private ormRepository: Repository<MedicalRecord>;

  constructor() {
    this.ormRepository = getRepository(MedicalRecord);
  }

  public async findById(id: string): Promise<MedicalRecord | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findBySequenceNumber(sequence: number): Promise<MedicalRecord | undefined> {
    const medicalRecord = await this.ormRepository.findOne({
      where: { sequence },
      relations: ['place'],

    });

    return medicalRecord;
  }

  public async create(medicalRecordData: ICreateMedicalRecordDTO): Promise<MedicalRecord> {
    const medicalRecord = this.ormRepository.create(medicalRecordData);

    await this.ormRepository.save(medicalRecord);

    return medicalRecord;
  }

  public async save(medicalRecord: MedicalRecord): Promise<MedicalRecord> {
    return this.ormRepository.save(medicalRecord);
  }
}

export default MedicalRecordsRepository;
