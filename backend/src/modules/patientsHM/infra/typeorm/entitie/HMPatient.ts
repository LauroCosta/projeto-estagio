import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('hm_patient', {
  engine: 'mysql',
  name: 'HMdatabase',
  database: 'teste',
})
class HMPatient {
  @PrimaryColumn('int', { name: 'patient_id' })
  patientId: number;

  @Column('varchar', { name: 'patient_sus', nullable: true, length: 15 })
  patientSus: string | null;

  @Column('varchar', { name: 'patient_location', nullable: true, length: 20 })
  patientLocation: string | null;

  @Column('varchar', { name: 'patient_name', nullable: true, length: 100 })
  patientName: string | null;

  @Column('varchar', {
    name: 'patient_name_social',
    nullable: true,
    length: 30,
  })
  patientNameSocial: string | null;

  @Column('datetime', { name: 'patient_date_birth' })
  patientDateBirth: Date;

  @Column('int', { name: 'patient_naturalness', nullable: true })
  patientNaturalness: number | null;

  @Column('varchar', { name: 'patient_gender', nullable: true, length: 1 })
  patientGender: string | null;

  @Column('varchar', { name: 'patient_cpf', nullable: true, length: 11 })
  patientCpf: string | null;

  @Column('int', { name: 'patient_nationality', nullable: true })
  patientNationality: number | null;

  @Column('varchar', { name: 'patient_father', nullable: true, length: 40 })
  patientFather: string | null;

  @Column('varchar', { name: 'patient_mother', nullable: true, length: 40 })
  patientMother: string | null;

  @Column('int', { name: 'patient_profession', nullable: true })
  patientProfession: number | null;

  @Column('varchar', { name: 'patient_address', nullable: true, length: 40 })
  patientAddress: string | null;

  @Column('varchar', {
    name: 'patient_address_number',
    nullable: true,
    length: 7,
  })
  patientAddressNumber: string | null;

  @Column('varchar', {
    name: 'patient_address_complement',
    nullable: true,
    length: 15,
  })
  patientAddressComplement: string | null;

  @Column('int', { name: 'neighborhood_id', nullable: true })
  neighborhoodId: number | null;

  @Column('varchar', {
    name: 'patient_address_reference',
    nullable: true,
    length: 70,
  })
  patientAddressReference: string | null;

  @Column('varchar', { name: 'patient_telephone', nullable: true, length: 25 })
  patientTelephone: string | null;

  @Column('varchar', { name: 'patient_telephone2', length: 25 })
  patientTelephone2: string;

  @Column('varchar', { name: 'patient_cep', length: 11 })
  patientCep: string;

  @Column('datetime', { name: 'patient_register', nullable: true })
  patientRegister: Date | null;

  @Column('int', { name: 'patient_register_user' })
  patientRegisterUser: number;

  @Column('varchar', { name: 'patient_note', nullable: true, length: 40 })
  patientNote: string | null;

  @Column('timestamp', {
    name: 'patient_update',
    default: () => 'CURRENT_TIMESTAMP',
  })
  patientUpdate: Date;

  @Column('int', { name: 'patient_update_user', nullable: true })
  patientUpdateUser: number | null;

  @Column('varchar', { name: 'patient_status', length: 1 })
  patientStatus: string;
}

export default HMPatient;
