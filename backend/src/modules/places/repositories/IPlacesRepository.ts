import Place from '../infra/typeorm/entities/Place';

export default interface IPlacesRepository {
  index(): Promise<Place[]>;
  findById(id: string): Promise<Place | undefined>;
  findByDescription(description: string): Promise<Place | undefined>;
  create(description: string): Promise<Place>;
  save(data: Place): Promise<Place>;
}
