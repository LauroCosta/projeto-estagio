import { injectable, inject } from 'tsyringe';

import Attendance from '@modules/attendances/infra/typeorm/entities/Attendance';
import IAttendancesRepository from '../repositories/IAttendancesRepository';

interface IRequest {
  day: number;
  year: number;
  month: number;
}
@injectable()
class ListAttendancesDayService {
  constructor(
    @inject('AttendancesRepository')
    private attendancesRepository: IAttendancesRepository,
  ) {}

  public async execute({ day, month, year }: IRequest): Promise<Attendance[]> {
    const attendances = await this.attendancesRepository.findByDateAttendance({
      day,
      month,
      year,
    });
    return attendances;
  }
}

export default ListAttendancesDayService;
