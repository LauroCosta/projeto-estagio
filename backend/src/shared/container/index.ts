import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IPlacesRepository from '@modules/places/repositories/IPlacesRepository';
import PlacesRepository from '@modules/places/infra/typeorm/repositories/PlacesRepository';

import ISpecialtiesRepository from '@modules/specialties/repositories/ISpecialtiesRepository';
import SpecialtiesRepository from '@modules/specialties/infra/typeorm/repositories/SpecialtiesRepository';


import IProfessionalsRepository from '@modules/professionals/repositories/IProfessionalsRepository';
import ProfessionalsRepository from '@modules/professionals/infra/typeorm/repositories/ProfessionalsRepository';


container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IPlacesRepository>(
  'PlacesRepository',
  PlacesRepository,
);

container.registerSingleton<ISpecialtiesRepository>(
  'SpecialtiesRepository',
  SpecialtiesRepository,
);

container.registerSingleton<IProfessionalsRepository>(
  'ProfessionalsRepository',
  ProfessionalsRepository,
);

