import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateMedicalRecordService from '@modules/medicalRecords/services/CreateMedicalRecordService';

export default class MedicalRecordsController {
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
