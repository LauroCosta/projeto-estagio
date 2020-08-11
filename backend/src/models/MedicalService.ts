import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import Place from './Place';
import MedicalRecord from './MedicalRecord';

@Entity('medical_services')
class MedicalServices {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  place: string;

  @Column()
  professional: string;

  @Column()
  specialty: string;

  @Column()
  pass_by_reception: boolean;

  @Column()
  service_date: Date;

  @Column()
  shift: string;

  @ManyToMany(
    type => MedicalRecord,
    medicalRecord => medicalRecord.medicalServices,
  )
  medicalRecords: MedicalRecord[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default MedicalServices;
