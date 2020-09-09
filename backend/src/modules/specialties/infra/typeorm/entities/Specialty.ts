import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import Professional from '@modules/professionals/infra/typeorm/entities/Professional';

@Entity('specialties')
class Specialty {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  description: string;

  @ManyToMany(type => Professional, professional => professional.specialties, { onDelete: 'SET NULL' })
  professionals: Professional[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Specialty;
