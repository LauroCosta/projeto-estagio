import { getRepository, Repository } from 'typeorm';

import IPlacesRepository from '@modules/places/repositories/IPlacesRepository';

import Place from '@modules/places/infra/typeorm/entities/Place';

class PlacesRepository implements IPlacesRepository {
  private ormRepository: Repository<Place>;

  constructor() {
    this.ormRepository = getRepository(Place);
  }

  public async index(): Promise<Place[]> {
    const places = await this.ormRepository.find();

    return places;
  }

  public async findById(id: string): Promise<Place | undefined> {
    const place = await this.ormRepository.findOne(id);

    return place;
  }

  public async findByDescription(
    description: string,
  ): Promise<Place | undefined> {
    const place = await this.ormRepository.findOne({ where: { description } });

    return place;
  }

  public async create(description: string): Promise<Place> {
    const place = this.ormRepository.create({ description });

    await this.ormRepository.save(place);

    return place;
  }

  public async save(place: Place): Promise<Place> {
    return this.ormRepository.save(place);
  }
}

export default PlacesRepository;
