import { getRepository } from 'typeorm';
import Place from '../models/Place';

interface Request {
  description: string;
}

class CreatePlaceService {
  public async execute({ description }: Request): Promise<Place> {
    const usersRepository = getRepository(Place);

    const place = usersRepository.create({
      description,
    });

    await usersRepository.save(place);

    return place;
  }
}

export default CreatePlaceService;
