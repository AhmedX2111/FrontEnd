import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course.service';
import Swal from 'sweetalert2';

declare var $: any; // Include jQuery

@Component({
  selector: 'app-student-course',
  templateUrl: './student-course.component.html',
  styleUrls: ['./student-course.component.css']
})
export class StudentCourseComponent implements OnInit {
  Courses: any[] = [];
  loading: boolean = false;
  showModal: boolean = false;
  courseCode: string = '';
  serverdown: boolean = false;
  coursename: string = '';
  courseimage: string = "";
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loading = true;
    this.loadcourses();
  }
  loadcourses() {
    this.courseService.getCourses().subscribe(
      (data) => {
        console.log(data);
        this.Courses = data;
        this.loading = false;
        this.serverdown = false;
      },
      (error: HttpErrorResponse) => {
        console.error('An error occurred:', error.message);
        this.loading = false;
        this.serverdown = true;
      }
    );
  }
  openCourseCodeModal() {
    this.showModal = true;
    $('#courseCodeModal').modal('show'); // Initialize Bootstrap modal
  }

  closeModal() {
    this.showModal = false;
    $('#courseCodeModal').modal('hide'); // Hide Bootstrap modal
  }
  evaluateCourseName() {
    // Logic to evaluate the course name based on the entered course code
    // For demonstration, let's assume you have a method in your CourseService to fetch the course name based on the code
    this.courseService.getCourseNameByCode(this.courseCode).subscribe(
      (course: any) => {
        console.log('Course Name:', course.courseName);
        this.coursename = course.courseName;
        this.courseimage = course.imageBin;
        // Do something with the retrieved course name
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching course name:', error.message);
        // Handle error
      }
    );
  }
  preventClose(event: Event) {
    event.stopPropagation();
  }

  joinCourseWithCode() {
    // Logic for joining the course with entered code
    console.log('Course Code:', this.courseCode);
    const user_Id = localStorage.getItem("user_Id");
    this.courseService.ConfirmCourseByCode(this.courseCode, user_Id).subscribe(
      next => {
        console.log('تم الاشتراك في الكورس');
        Swal.fire({
          icon: 'success',
          title: 'Joined Successfully!',
          text: 'You have successfully Joind the Course.',
          imageUrl: '../../../assets/images/logoo.png', // Replace with the path to your image
          imageWidth: 200, // Adjust image width as needed
          imageHeight: 200, // Adjust image height as needed
          imageAlt: 'Success Image'
        });

        this.loadcourses();

      },
      error => {

        console.log('فشل في الدخول');

      }

    )
    // Close modal after joining
    this.closeModal();
  }
}
