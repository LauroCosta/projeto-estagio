import AppError from '@shared/errors/AppError';
import FakePlacesRepository from '../repositories/fakes/FakePlacesRepository';
import CreatePlaceService from './CreatePlaceService';

let fakePlacesRepository: FakePlacesRepository;
let createPlace: CreatePlaceService;

describe('CreatePlace', () => {
  beforeEach(() => {
    fakePlacesRepository = new FakePlacesRepository();
    createPlace = new CreatePlaceService(fakePlacesRepository);
  });

  it('should be able to create a new place', async () => {
    const place = await createPlace.execute('Consultório 01');

    expect(place).toHaveProperty('id');
  });

  it('should not be able to create a new place with the same description as another', async () => {
    await createPlace.execute('Teste');

    await expect(createPlace.execute('Teste')).rejects.toBeInstanceOf(AppError);
  });
});
