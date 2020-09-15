import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Place from '@modules/places/infra/typeorm/entities/Place';
import IPlacesRepository from '../repositories/IPlacesRepository';

@injectable()
class CreatePlaceService {
  constructor(
    @inject('PlacesRepository')
    private placesRepository: IPlacesRepository,
  ) {}

  async execute(description: string): Promise<Place> {
    const checkPlaceExists = await this.placesRepository.findByDescription(
      description,
    );


    if (checkPlaceExists) {
      throw new AppError('place already registered.');
    }

    const place = this.placesRepository.create(description);

    return place;
  }
}

export default CreatePlaceService;
