import Professional from '../infra/typeorm/entities/Professional';
import ICreateProfessionalDTO from '../dtos/ICreateProfessionalDTO';

export default interface IProfessionalsRepository {
  index(): Promise<Professional[]>;
  findById(id: string): Promise<Professional | undefined>;
  findByName(name: string): Promise<Professional | undefined>;
  create(data: ICreateProfessionalDTO): Promise<Professional>;
  save(data: Professional): Promise<Professional>;
}
