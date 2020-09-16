import Place from '@modules/places/infra/typeorm/entities/Place';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import IPlacesRepository from '../repositories/IPlacesRepository';

interface IRequest {
  place_id: string;
  description: string;
}

@injectable()
class UpdatePlaceService {
  constructor(
    @inject('PlacesRepository')
    private placesRepository: IPlacesRepository,
  ) {}

  public async execute({ place_id, description }: IRequest): Promise<Place> {
    const place = await this.placesRepository.findById(place_id);
    if (!place) {
      throw new AppError('Place not found');
    }

    const placeUpdatedDescription = await this.placesRepository.findByDescription(
      description,
    );

    if (placeUpdatedDescription && placeUpdatedDescription.id !== place_id) {
      throw new AppError('Already have a place with this description');
    }

    place.description = description;

    await this.placesRepository.save(place);

    return place;
  }
}

export default UpdatePlaceService;
