import { Component } from '@angular/core';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-course-uploads',
  templateUrl: './course-uploads.component.html',
  styleUrls: ['./course-uploads.component.css']
})
export class CourseUploadsComponent {
  courses: any[] = []; // Array to store courses
  uploads: any[] = []; // Array to store uploads
  selectedCourseId!: number;
  constructor(private service: CourseService) {
    this.loadCourses();
  }

  loadCourses() {
    this.service.getAllCourses().subscribe(courses => {
      this.courses = courses;
      console.log(courses);
    });
  }

  onCourseSelect() {
    if (this.selectedCourseId) {
      this.service.getUploadsByCourseId(this.selectedCourseId)
        .subscribe(uploads =>
          {
            this.uploads = uploads;
            console.log(this.uploads);
          } 



        );
    } else {
      this.uploads = []; // Clear uploads if no course selected
    }
  }
}
