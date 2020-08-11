import { getRepository } from 'typeorm';
import Specialty from '../models/Specialty';

interface Request {
  description: string;
}

class CreateSpecialtyService {
  public async execute({ description }: Request): Promise<Specialty> {
    const usersRepository = getRepository(Specialty);

    const specialty = usersRepository.create({
      description,
    });

    await usersRepository.save(specialty);

    return specialty;
  }
}

export default CreateSpecialtyService;
