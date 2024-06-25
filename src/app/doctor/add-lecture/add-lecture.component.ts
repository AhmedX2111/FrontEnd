import { Component } from '@angular/core';
import { CourseService } from 'src/app/course.service';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-add-lecture',
  templateUrl: './add-lecture.component.html',
  styleUrls: ['./add-lecture.component.css'],
})
export class AddLectureComponent {
  weekDays: string[] = [
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ];
  lecturesData: { [key: string]: Lecture[] } = {};
  newLecture: any = {
    id: 0,
    title: '',
    time: '',
    dayScheduleId: 0,
    doctorId:
      localStorage.getItem('user_Id') !== null
        ? +localStorage.getItem('user_Id')!
        : 0,
  }; // Add a newLecture object
  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.loadSchedules();
  }

  loadSchedules(): void {
    this.scheduleService.getSchedules().subscribe((data: DaySchedule[]) => {
      this.lecturesData = {};
      data.forEach((daySchedule: DaySchedule) => {
        this.lecturesData[daySchedule.day] = daySchedule.lectures.map(
          (lecture) => ({
            id: lecture.id,
            title: lecture.title,
            time: lecture.time,
            dayScheduleId: lecture.dayScheduleId,
          })
        );
      });
    });
  }

  addLecture(): void {
    console.log(this.newLecture);
    this.scheduleService.addLecture(this.newLecture).subscribe(() => {
      this.scheduleService.getSchedules().subscribe((data: DaySchedule[]) => {
        this.lecturesData = {};
        data.forEach((daySchedule: DaySchedule) => {
          this.lecturesData[daySchedule.day] = daySchedule.lectures.map(
            (lecture) => ({
              id: lecture.id,
              title: lecture.title,
              time: lecture.time,
              dayScheduleId: lecture.dayScheduleId,
            })
          );
        });
      });

      this.newLecture = { id: 0, title: '', time: '', dayScheduleId: 0 }; // Reset newLecture
    });
  }

  updateLecture(lecture: any): void {
    this.scheduleService.updateLecture(lecture).subscribe(() => {
      this.loadSchedules();
    });
  }

  deleteLecture(id: number): void {
    this.scheduleService.deleteLecture(id).subscribe(() => {
      this.loadSchedules();
    });
  }
}

export interface Lecture {
  id: number;
  title: string;
  time: string;
  dayScheduleId: number;
  doctorId?: number;
}
export interface DaySchedule {
  day: string;
  lectures: Lecture[];
}
