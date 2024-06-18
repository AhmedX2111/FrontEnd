import { Component, Input } from '@angular/core';
import { ScheduleService } from 'src/app/doctor/services/schedule.service';

@Component({
  selector: 'app-week-schedule',
  templateUrl: './week-schedule.component.html',
  styleUrls: ['./week-schedule.component.css']
})
export class WeekScheduleComponent {
  weekDays: string[] = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  lecturesData: { [key: string]: Lecture[] } = {};
  newLecture: Lecture = { id: 0, title: '', time: '', dayScheduleId: 0 }; // Add a newLecture object

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.loadSchedules();
  }

  loadSchedules(): void {
    this.scheduleService.getSchedules().subscribe((data: DaySchedule[]) => {
      this.lecturesData = {};
      data.forEach((daySchedule: DaySchedule) => {
        this.lecturesData[daySchedule.day] = daySchedule.lectures.map(lecture => ({
          id: lecture.id,
          title: lecture.title,
          time: lecture.time,
          dayScheduleId: lecture.dayScheduleId
        }));
      });
    });
  }

  addLecture(): void {
    this.scheduleService.addLecture(this.newLecture).subscribe(() => {
      this.loadSchedules();
      this.newLecture = { id: 0, title: '', time: '', dayScheduleId: 0 }; // Reset newLecture
    });
  }

  updateLecture(lecture: Lecture): void {
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
}
export interface DaySchedule {
  day: string;
  lectures: Lecture[];
}
