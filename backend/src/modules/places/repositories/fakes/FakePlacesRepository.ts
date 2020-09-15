import { uuid } from 'uuidv4';

import IPlacesRepository from '@modules/places/repositories/IPlacesRepository';

import Place from '@modules/places/infra/typeorm/entities/Place';

class FakePlacesRepository implements IPlacesRepository {
  private places: Place[] = [];

  public async index(): Promise<Place[]> {

    return this.places;
  }

  public async findById(id: string): Promise<Place | undefined> {
    const findPlace = this.places.find(place => place.id === id);

    return findPlace;
  }

  public async findByDescription(description: string): Promise<Place | undefined> {
    const findPlace = this.places.find(place => place.description === description);
    return findPlace;
  }

  public async create(description: string): Promise<Place> {
    const place = new Place();

    place.id = uuid();
    place.description = description;

    this.places.push(place);
    console.log(place.description)
    return place;
  }

  public async save(place: Place): Promise<Place> {
    const findIndex = this.places.findIndex(findPlace => findPlace.id === place.id);

    this.places[findIndex] = place;

    return place;
  }
}

export default FakePlacesRepository;
