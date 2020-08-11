import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateSpecialtyService from '../services/CreateSpecialtyService';
import Specialty from '../models/Specialty';

const specialtiesRouter = Router();

specialtiesRouter.get('/', async (request, response) => {
  const specialtyRepository = getRepository(Specialty);

  const specialty = await specialtyRepository.find({
    relations: ['professionals'],
  });

  return response.json(specialty);
});

specialtiesRouter.post('/', async (request, response) => {
  const { description } = request.body;

  const createSpecialty = new CreateSpecialtyService();

  const specialty = await createSpecialty.execute({
    description,
  });

  return response.json(specialty);
});

export default specialtiesRouter;
