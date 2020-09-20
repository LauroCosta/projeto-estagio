import { getRepository, Repository, Raw } from 'typeorm';

import IAttendancesRepository from '@modules/attendances/repositories/IAttendancesRepository';
import ICreateAttendanceDTO from '@modules/attendances/dtos/ICreateAttendanceDTO';
import IFindAllAttendancesInDayDTO from '@modules/attendances/dtos/IFindAllAttendancesInDayDTO';

import Attendance from '@modules/attendances/infra/typeorm/entities/Attendance';

class AttendancesRepository implements IAttendancesRepository {
  private ormRepository: Repository<Attendance>;

  constructor() {
    this.ormRepository = getRepository(Attendance);
  }

  public async findById(id: string): Promise<Attendance | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findByDateAttendance({
    day,
    year,
    month,
  }: IFindAllAttendancesInDayDTO): Promise<Attendance[]> {
    const parsedMonth = String(month).padStart(2, '0');
    const parsedDay = String(day).padStart(2, '0');

    const attendances = await this.ormRepository.find({
      where: {
        date_attendance: Raw(
          dateFieldName =>
            `to_char(${dateFieldName}, 'DD-MM-YYYY') = '${parsedDay}-${parsedMonth}-${year}'`,
        ),
      },
      relations: ['medicalRecords'],
    });

    return attendances;
  }

  public async create(data: ICreateAttendanceDTO): Promise<Attendance> {
    const attendance = this.ormRepository.create(data);

    await this.ormRepository.save(attendance);

    return attendance;
  }

  public async save(attendance: Attendance): Promise<Attendance> {
    return this.ormRepository.save(attendance);
  }
}

export default AttendancesRepository;
