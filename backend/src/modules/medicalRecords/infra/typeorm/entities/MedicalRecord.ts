import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import Place from '@modules/places/infra/typeorm/entities/Place';
import Attendance from '@modules/attendances/infra/typeorm/entities/Attendance';

@Entity('medical_records')
class MedicalRecord {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  sequence: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, nullable: true })
  mother_name: string;

  @Column({ length: 1, nullable: true })
  gender: string;

  @Column({ length: 25, nullable: true })
  status: string;

  @Column({ default: true })
  isActive: boolean;

  @Column('timestamp')
  birth_date: Date;

  @ManyToOne(type => Place, place => place.medicalRecords)
  place: Place;

  @ManyToMany(type => Attendance, attendance => attendance.medicalRecords, {
    onDelete: 'SET NULL',
  })
  attendances: Attendance[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default MedicalRecord;
