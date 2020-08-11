import { getRepository } from 'typeorm';
import Professional from '../models/Professional';
import Specialty from '../models/Specialty';

interface Request {
  name: string;
  specialties: Specialty[];
}

class CreateProfessionalService {
  public async execute({ name, specialties }: Request): Promise<Professional> {
    const usersRepository = getRepository(Professional);

    const professional = usersRepository.create({
      name,
      specialties,
    });

    await usersRepository.save(professional);

    return professional;
  }
}

export default CreateProfessionalService;
