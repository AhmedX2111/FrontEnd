import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseUploadsComponent } from './course-uploads/course-uploads.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StudentCourseComponent } from '../student/student-course/student-course.component';
import { StudentEnrolledComponent } from './student-enrolled/student-enrolled.component';
import { AddLectureComponent } from './add-lecture/add-lecture.component';
import { DoctorGuard } from './doctor-login/doctor.guard';

const routes: Routes = [
  { path: '', component: DoctorLoginComponent },
  { path: 'doctor-login', component: DoctorLoginComponent },
  { path: 'doctor-register', component: DoctorRegisterComponent },
  {
    path: 'doctor-home',
    component: DoctorHomeComponent,
    canActivate: [DoctorGuard], // Apply guard here
    children: [
      { path: 'courses', component: CoursesComponent },
      { path: 'course-uploads', component: CourseUploadsComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'Student-Enrolled', component: StudentEnrolledComponent },
      { path: 'Add-Lecture', component: AddLectureComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
