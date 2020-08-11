import { Router } from 'express';
// import ensureAuthenticated from '../middlewares/ensureAutheticaded';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, cpf, password } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    cpf,
    password,
  });

  delete user.password;

  return response.json(user);
});

export default usersRouter;
