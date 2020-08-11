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

import Specialty from './Specialty';

@Entity('professionals')
class Professional {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToMany(type => Specialty, specialty => specialty.professionals)
  @JoinTable()
  specialties: Specialty[];

  @UpdateDateColumn()
  updated_at: Date;
}

export default Professional;
