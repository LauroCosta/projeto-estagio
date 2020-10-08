import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowHMPatientService from '@modules/patientsHM/services/ShowHMPatientService';

export default class HMPatientsController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.query;
    const showHMPatient = container.resolve(ShowHMPatientService);

    const patient = await showHMPatient.execute(Number(id));

    return response.json(patient);
  }
}
