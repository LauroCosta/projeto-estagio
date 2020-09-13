import MedicalRecord from '../infra/typeorm/entities/MedicalRecord';
import ICreateMedicalRecord from '@modules/medicalRecords/dtos/ICreateMedicalRecordDTO'
export default interface IMedicalRecordRepository {
  findById(id: string): Promise<MedicalRecord | undefined>;
  findBySequenceNumber(sequence: number): Promise<MedicalRecord | undefined>;
  create(data: ICreateMedicalRecord): Promise<MedicalRecord>;
  save(data: MedicalRecord): Promise<MedicalRecord>;
}
