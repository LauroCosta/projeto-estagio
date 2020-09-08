import { injectable, inject } from 'tsyringe';

import Place from '@modules/places/infra/typeorm/entities/Place';
import IPlacesRepository from '../repositories/IPlacesRepository';

@injectable()
class ListPlacesService {
  constructor(
    @inject('PlacesRepository')
    private placesRepository: IPlacesRepository,
  ) {}

  async execute(): Promise<Place[]> {
    const places = this.placesRepository.index();

    return places;
  }
}

export default ListPlacesService;
