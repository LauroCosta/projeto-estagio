import Place from '@modules/places/infra/typeorm/entities/Place';

export default interface ICreateMedicalRecordDTO {
  sequence: number;
  name: string;
  mother_name: string;
  gender: string;
  status: string;
  isActive: boolean;
  birth_date: Date;
  place: Place;
}
