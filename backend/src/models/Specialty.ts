import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import Professional from './Professional';

@Entity('specialties')
class Specialty {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;

  @ManyToMany(type => Professional, professional => professional.specialties)
  professionals: Professional[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Specialty;
