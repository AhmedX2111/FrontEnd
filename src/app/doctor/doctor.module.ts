import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { StudentModule } from "../student/student.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { CoursesComponent } from './courses/courses.component';
import { CourseUploadsComponent } from './course-uploads/course-uploads.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StudentEnrolledComponent } from './student-enrolled/student-enrolled.component';
import { AddLectureComponent } from './add-lecture/add-lecture.component';

@NgModule({
    declarations: [
        DoctorLoginComponent,
        DoctorRegisterComponent,
        DoctorHomeComponent,
        CoursesComponent,
        CourseUploadsComponent,
        ScheduleComponent,
        StudentEnrolledComponent,
        AddLectureComponent
    ],
    imports: [
        CommonModule,
        DoctorRoutingModule,
        StudentModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule
    ]
})
export class DoctorModule { }
