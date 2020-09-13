import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import Place from '@modules/places/infra/typeorm/entities/Place';

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
  // @ManyToMany(
  //   type => MedicalService,
  //   medicalService => medicalService.medicalRecords,
  // )
  // @JoinTable()
  // medicalServices: MedicalService[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default MedicalRecord;
