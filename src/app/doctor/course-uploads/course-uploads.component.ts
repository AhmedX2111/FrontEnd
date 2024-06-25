import { Component } from '@angular/core';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-course-uploads',
  templateUrl: './course-uploads.component.html',
  styleUrls: ['./course-uploads.component.css'],
})
export class CourseUploadsComponent {
  courses: any[] = [];
  uploads: any[] = [];
  selectedCourseId!: number;
  uploadName: any;
  fileUrl: any;
  constructor(private service: CourseService) {
    this.loadCourses();
  }

  loadCourses() {
    this.service.getAllCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  postMatertial() {
    console.log(this.selectedCourseId, this.fileUrl, this.uploadName);
    this.service
      .postMatertial(this.selectedCourseId, this.fileUrl, this.uploadName)
      .subscribe((res) => {
        console.log(res);
        this.service
          .getUploadsByCourseId(this.selectedCourseId)
          .subscribe((uploads) => {
            this.uploads = uploads;
          });
      });
  }
  onCourseSelect() {
    if (this.selectedCourseId) {
      this.service
        .getUploadsByCourseId(this.selectedCourseId)
        .subscribe((uploads) => {
          console.log('course');
          console.log(this.uploads);
          this.uploads = uploads;
        });
    } else {
      this.uploads = [];
    }
  }
}
