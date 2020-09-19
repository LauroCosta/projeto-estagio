import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import MedicalRecord from '@modules/medicalRecords/infra/typeorm/entities/MedicalRecord';

@Entity('attendances')
class Attendance {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  place: string;

  @Column({ length: 100 })
  professional: string;

  @Column({ length: 100 })
  specialty: string;

  @Column()
  pass_by_reception: boolean;

  @Column('timestamp')
  date_attendance: Date;

  @ManyToMany(
    type => MedicalRecord,
    medicalRecord => medicalRecord.attendances,
    {
      onDelete: 'SET NULL',
    },
  )
  @JoinTable()
  medicalRecords: MedicalRecord[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Attendance;
