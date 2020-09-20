import ICreateAttendanceDTO from '@modules/attendances/dtos/ICreateAttendanceDTO';
import Attendance from '@modules/attendances/infra/typeorm/entities/Attendance';
import IFindAllAttendancesInDayDTO from '@modules/attendances/dtos/IFindAllAttendancesInDayDTO';

export default interface IAttendancesRepository {
  findById(id: string): Promise<Attendance | undefined>;
  findByDateAttendance(
    dateAttendance: IFindAllAttendancesInDayDTO,
  ): Promise<Attendance[]>;
  create(data: ICreateAttendanceDTO): Promise<Attendance>;
  save(data: Attendance): Promise<Attendance>;
}
