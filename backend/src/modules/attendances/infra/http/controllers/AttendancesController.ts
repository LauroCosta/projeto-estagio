import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAttendanceService from '@modules/attendances/services/CreateAttendanceService';
import ListAttendancesDayService from '@modules/attendances/services/ListAttendancesDayService';

export default class AttendancesController {
  public async listAttendancesDay(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { day, month, year } = request.body;

    const listAttendancesDay = container.resolve(ListAttendancesDayService);

    const attendances = await listAttendancesDay.execute({ day, month, year });
    return response.json(attendances);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      professional,
      specialty,
      place,
      pass_by_reception,
      date_attendance,
    } = request.body;

    const createAttendance = container.resolve(CreateAttendanceService);

    const attendance = await createAttendance.execute({
      professional,
      specialty,
      place,
      pass_by_reception,
      date_attendance,
    });

    return response.json(attendance);
  }
}
