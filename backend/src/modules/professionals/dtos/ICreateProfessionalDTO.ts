import Specialty from '@modules/specialties/infra/typeorm/entities/Specialty';

export default interface ICreateProfessionalDTO {
  name: string;
  specialties: Specialty[];
}
