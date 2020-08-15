import { Router } from 'express';
// import ensureAuthenticated from '../middlewares/ensureAutheticaded';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, userName, cpf, password } = request.body;

  console.log(userName);
  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    userName,
    cpf,
    password,
  });

  delete user.password;

  return response.json(user);
});

export default usersRouter;
