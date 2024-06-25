import { Component } from '@angular/core';
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
  lecturesData: any = {};
  newLecture: any = {
    id: 0,
    title: '',
    time: '',
    dayScheduleId: 0,
    doctorId:
      localStorage.getItem('user_Id') !== null
        ? +localStorage.getItem('user_Id')!
        : 0,
  };

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.loadSchedules();
  }

  loadSchedules(): void {
    this.scheduleService.getSchedules().subscribe((lectures: any[]) => {
      // Clear existing lecturesData
      this.lecturesData = { time: 1 };
      console.log(lectures);
      // Group lectures by day
    });
  }

  addLecture(): void {
    this.scheduleService.addLecture(this.newLecture).subscribe(() => {
      this.loadSchedules();
      this.newLecture = {
        id: 0,
        title: '',
        time: '',
        dayScheduleId: 0,
        doctorId: 0,
      }; // Reset newLecture
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
