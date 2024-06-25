import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'Courses');
  }
  addAnnouncement(title: any, message: any): Observable<any> {
    const user_Id = localStorage.getItem('user_Id');

    return this.http.post<any>('https://localhost:5001/api/Announcement', {
      title,
      message,
      doctorId: user_Id,
    });
  }

  getAnnouncements(): Observable<any> {
    return this.http.get<any>('https://localhost:5001/api/Announcement');
  }

  getCourses(): Observable<any> {
    const user_Id = localStorage.getItem('user_Id');
    console.log(user_Id);
    return this.http.get<any>(
      this.apiUrl + 'Students/GetCoursesByStudent/' + user_Id
    );
  }
  getCourseNameByCode(coursecode: any) {
    return this.http.get<any>(
      this.apiUrl + 'Students/GetCourseNameByCode/' + coursecode
    );
  }
  ConfirmCourseByCode(coursecode: any, studentid: any) {
    return this.http.post<any>(
      this.apiUrl +
        'Students/ConfirmCourseByCode/' +
        coursecode +
        '/' +
        studentid,
      null
    );
  }
  addCourse(course: any) {
    return this.http.post<any>(this.apiUrl + 'Courses/', course);
  }
  deleteCourse(courseId: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}Courses/${courseId}`);
  }

  getUploadsByCourseId(courseId: number): Observable<any[]> {
    return this.http.get<any[]>(
      this.apiUrl + `Uploads/GetUploadsByCourseID/${courseId}`
    );
  }
  getStudentsByCourseId(courseId: number): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + `Courses/students/${courseId}`);
    {
      courseId;
    }
  }
  updateGrade(updateGradeDto: {
    studentId: number;
    courseId: number;
    grade: number;
  }): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}Courses/Update/Grade`,
      updateGradeDto
    );
  }
  postMatertial(courseId: any, fileUrl: any, uploadName: any) {
    return this.http.post<any>(`${this.apiUrl}Uploads`, {
      courseId,
      fileUrl,
      uploadName,
    });
  }
}
