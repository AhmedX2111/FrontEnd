import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/alertify.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  baseurl = 'https://localhost:5001/api/';
  materials: Material[] = [];
  displayedColumns: string[] = ['id', 'courseName', 'uploadName', 'fileUrl'];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private alertify: AlertifyService
  ) {
    this.route.params.subscribe((params) => {
      const courseId = params['courseId'];
      this.fetchMaterials(courseId);
    });
  }

  fetchMaterials(courseId: number) {
    this.http
      .get<any[]>(`${this.baseurl}Uploads/GetUploadsByCourseID/${courseId}`)
      .subscribe(
        (materials) => {
          this.materials = materials;
        },
        (error) => {
          console.error('Error fetching materials:', error);
          this.alertify.error('Failed to retrieve materials.');
        }
      );
  }

  openPDF(url: string) {
    window.open(url, '_blank'); // Open the PDF file in a new tab
  }
}

interface Material {
  id: number;
  uploadName: string;
  courseName: string;
  fileUrl: string; // URL of the PDF file
}
