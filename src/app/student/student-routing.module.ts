import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { MainComponent } from './main/main.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { WeekScheduleComponent } from './week-schedule/week-schedule.component';
import { CGPACalculatorComponent } from './gpa-cal/gpa.component';
import { StudentGuard } from './login/student.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [StudentGuard], // Apply guard here
    children: [
      { path: 'student-course', component: StudentCourseComponent },
      { path: 'main', component: MainComponent },
      { path: 'course-material/:courseId', component: CourseDetailsComponent },
      { path: 'week-schedule', component: WeekScheduleComponent },
      { path: 'gpa-cal', component: CGPACalculatorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
