import { injectable, inject } from 'tsyringe';

import Professional from '@modules/professionals/infra/typeorm/entities/Professional';
import IProfessionalsRepository from '../repositories/IProfessionalsRepository';

@injectable()
class ListProfessionalsService {
  constructor(
    @inject('ProfessionalsRepository')
    private professionalsRepository: IProfessionalsRepository,
  ) {}

  async execute(): Promise<Professional[]> {
    const professionals = this.professionalsRepository.index();

    return professionals;
  }
}

export default ListProfessionalsService;
