import { injectable, inject } from 'tsyringe';

import Attendance from '@modules/attendances/infra/typeorm/entities/Attendance';
import ICreateAttendanceDTO from '@modules/attendances/dtos/ICreateAttendanceDTO';
import IAttendancesRepository from '../repositories/IAttendancesRepository';

@injectable()
class CreateAttendanceService {
  constructor(
    @inject('AttendancesRepository')
    private attendancesRepository: IAttendancesRepository,
  ) {}

  async execute(attendanceDate: ICreateAttendanceDTO): Promise<Attendance> {
    const attendance = this.attendancesRepository.create(attendanceDate);

    return attendance;
  }
}

export default CreateAttendanceService;
