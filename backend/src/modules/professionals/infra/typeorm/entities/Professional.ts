import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm';

import Specialty from '@modules/specialties/infra/typeorm/entities/Specialty';

@Entity('professionals')
class Professional {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToMany(type => Specialty, specialty => specialty.professionals, { onDelete: 'SET NULL' })
  @JoinTable()
  specialties: Specialty[];

  @UpdateDateColumn()
  updated_at: Date;
}

export default Professional;
