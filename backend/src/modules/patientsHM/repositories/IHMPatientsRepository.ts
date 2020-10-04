import HMPatient from '../infra/typeorm/entities/HmPatient';

export default interface IHMPatientsRepository {
  index(): Promise<HMPatient[]>;
  findById(id: number): Promise<HMPatient | undefined>;
  findByName(namePatient: string): Promise<HMPatient | undefined>;
}
