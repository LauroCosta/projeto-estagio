import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateMedicalRecordService from '@modules/medicalRecords/services/CreateMedicalRecordService';
import ShowMedicalRecordService from '@modules/medicalRecords/services/ShowMedicalRecordService';

export default class MedicalRecordsController {

  public async show(request: Request, response: Response): Promise<Response> {
    const {sequence} = request.body;

    const showMedicalRecord = container.resolve(ShowMedicalRecordService);

    const medicalRecord = await showMedicalRecord.execute(sequence);

    return response.json(medicalRecord);
  }


  public async create(request: Request, response: Response): Promise<Response> {
    const {
      sequence,
      name,
      mother_name,
      gender,
      status,
      isActive,
      birth_date,
      place, } = request.body;

    const createMedicalRecord = container.resolve(CreateMedicalRecordService);

    const medicalRecord = await createMedicalRecord.execute({
      sequence,
      name,
      mother_name,
      gender,
      status,
      isActive,
      birth_date,
      place,
    });

    return response.json(medicalRecord);
  }
}
