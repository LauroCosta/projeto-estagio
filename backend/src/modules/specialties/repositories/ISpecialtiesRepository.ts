import Specialty from '../infra/typeorm/entities/Specialty';

export default interface ISpecialtiesRepository {
  index(): Promise<Specialty[]>;
  findById(id: string): Promise<Specialty | undefined>;
  findByDescription(description: string): Promise<Specialty | undefined>;
  create(description: string): Promise<Specialty>;
  save(data: Specialty): Promise<Specialty>;
}
