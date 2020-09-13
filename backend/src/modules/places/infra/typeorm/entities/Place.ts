import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
  } from 'typeorm';

  import MedicalRecord from "@modules/medicalRecords/infra/typeorm/entities/MedicalRecord";

  @Entity('places')
  class Place {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @OneToMany(type => MedicalRecord, medicalRecord => medicalRecord.place)
    medicalRecords: MedicalRecord[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
  }

  export default Place;
