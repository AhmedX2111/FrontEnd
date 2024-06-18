import { Component } from '@angular/core';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-student-enrolled',
  templateUrl: './student-enrolled.component.html',
  styleUrls: ['./student-enrolled.component.css']
})
export class StudentEnrolledComponent {
  courses: any[] = []; // Array to store courses
  studentCourses: any[] = []; // Array to store student courses
  selectedCourseId!: number;

  constructor(private service: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.service.getAllCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  onCourseSelect() {
    if (this.selectedCourseId) {
      this.service.getStudentsByCourseId(this.selectedCourseId).subscribe(s => {
        this.studentCourses = s;
      });
    } else {
      this.studentCourses = []; // Clear uploads if no course selected
    }
  }

  updateGrade(studentId: number, courseId: number, grade: number) {
    if (grade !== undefined && grade >= 0) {
      this.service.updateGrade({ studentId, courseId, grade }).subscribe(() => {
        alert('Grade updated successfully');
        this.onCourseSelect(); // Reload the student list to show the updated grades
      }, error => {
        console.error('Error updating grade', error);
        alert('Error updating grade');
      });
    } else {
      alert('Please enter a valid grade');
    }
  }
}
