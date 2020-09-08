import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IPlacesRepository from '@modules/places/repositories/IPlacesRepository';
import PlacesRepository from '@modules/places/infra/typeorm/repositories/PlacesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IPlacesRepository>(
  'PlacesRepository',
  PlacesRepository,
);
