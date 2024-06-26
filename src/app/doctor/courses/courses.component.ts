import { Component } from '@angular/core';
import { CourseService } from 'src/app/course.service';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  model = new Course();
  courses: GetCourse[] = [];

  constructor(private coursesService: CourseService,private clipboard: Clipboard) { }

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.coursesService.getAllCourses().subscribe(courses => {
      this.courses = courses;
      console.log(courses);
    });
  }

  onSubmit() {
    const formData = new FormData();
    if (this.model.courseName) { // Ensure courseName is not undefined
      formData.append('CourseName', this.model.courseName);
    }
    if (this.model.LevelId) { // Ensure courseName is not undefined
      formData.append('LevelId', this.model.LevelId.toString());
    }
    if (this.model.semesterId !== undefined) { // Ensure semesterId is not undefined
      formData.append('SemesterId', this.model.semesterId.toString());
    }
    if (this.model.imagePath !== undefined) { // Ensure imagePath is a Blob
      formData.append('Image', this.model.imagePath);
    }


    formData.append('doctorId', localStorage.getItem('user_Id')?? "");
    this.coursesService.addCourse(formData).subscribe(() => {
      this.loadCourses(); // Reload the list
    });
  }
  editCourse(course: any) {
    this.model.courseName=course.courseName;
    this.model.semesterId=course.semesterId;
    
  }

  async deleteCourse(courseId: any) {

      console.log(courseId)
     
    await this.coursesService.deleteCourse(courseId).subscribe();
    // Logic to delete course
    window.location.reload();
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.model.imagePath = event.target.files[0];
    }
  }
  copyCourseCode(code: any) {
    this.clipboard.copy(code);
  }
}


export class Course {
  constructor(
    public id?: number,
    public courseName?: string,
    public LevelId?: number,
    public semesterId?: number,
    public imagePath?: string
  ) {

  }
}
export class GetCourse {
  constructor(
    public id?: number,
    public courseName?: string,
    public courseCode?: string,
    public LevelId?: number,
    public semesterName?: number,
    public imageBin?: Blob
  ) {

  }
}