import Professional from '../infra/typeorm/entities/Professional';
import ICreateProfessionalDTO from '../dtos/ICreateProfessionalDTO';

export default interface IUserRepository {
  findById(id: string): Promise<Professional | undefined>;
  findByName(name: string): Promise<Professional | undefined>;
  create(data: ICreateProfessionalDTO): Promise<Professional>;
  save(data: Professional): Promise<Professional>;
}
