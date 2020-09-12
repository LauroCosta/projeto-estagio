import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity('medical_records')
class MedicalRecords {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  sequence_number: number;

  @Column()
  name: string;

  @Column()
  mother_name: string;

  @Column()
  local_id: number;

  // @ManyToMany(
  //   type => MedicalService,
  //   medicalService => medicalService.medicalRecords,
  // )
  // @JoinTable()
  // medicalServices: MedicalService[];

  @Column('timestamp')
  birth_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default MedicalRecords;
