export default interface ICreateAttendanceDTO {
  professional: string;
  place: string;
  specialty: string;
  pass_by_reception: boolean;
  date_attendance: Date;
}
