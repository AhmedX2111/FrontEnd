import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { MainComponent } from './main/main.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { WeekScheduleComponent } from './week-schedule/week-schedule.component';
import { CGPACalculatorComponent } from './gpa-cal/gpa.component';
import { AnnouncementsComponent } from './ANNOUNCEMENTS/announcements.component';
import { StudentResetComponent } from './student-reset-password/student-reset.component';
import { StudentConfirmComponent } from './student-confirm-password/student-confirm.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MainComponent,
    CourseDetailsComponent,
    WeekScheduleComponent,
    CGPACalculatorComponent,
    AnnouncementsComponent,
    StudentResetComponent,
    StudentConfirmComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  exports: [SpinnerComponent],
})
export class StudentModule {}
