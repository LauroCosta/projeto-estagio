import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';

import AppError from '../errors/AppError';

interface Request {
  name: string;
  userName: string;
  cpf: string;
  password: string;
}

class CreateUserService {
  public async execute({
    name,
    userName,
    cpf,
    password,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExist = await usersRepository.findOne({
      where: { userName },
    });

    if (checkUserExist) {
      throw new AppError('Usuário já cadastrado');
    }

    const checkCpfExist = await usersRepository.findOne({
      where: { cpf },
    });

    if (checkCpfExist) {
      throw new AppError('CPF já cadastrado');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      userName,
      cpf,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
