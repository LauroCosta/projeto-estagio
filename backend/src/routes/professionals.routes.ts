import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateProfessionalService from '../services/CreateProfessionalSevice';
import Professional from '../models/Professional';

const professionalsRouter = Router();

professionalsRouter.get('/', async (request, response) => {
  const professionalRepository = getRepository(Professional);

  const professional = await professionalRepository.find({
    relations: ['specialties'],
  });

  return response.json(professional);
});

professionalsRouter.post('/', async (request, response) => {
  const { name, specialties } = request.body;
  const createProfessional = new CreateProfessionalService();

  const professional = await createProfessional.execute({
    name,
    specialties,
  });

  return response.json(professional);
});

export default professionalsRouter;
