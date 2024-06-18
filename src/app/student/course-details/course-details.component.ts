import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/alertify.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})

export class CourseDetailsComponent {
  
  baseurl = "https://localhost:5001/api/";
  materials: Material[] = [
     
 
    // Add more materials as needed
  ];
  displayedColumns: string[] = [  'courseName', 'uploadName','fileUrl']; // Columns to display in the table
  courseuploads: any = {};
  constructor(private http: HttpClient, private route: ActivatedRoute, private alertify: AlertifyService) {

    route.params.subscribe(result => {
      this.http.get(this.baseurl + "Uploads/GetUploadsByCourseID/" + result["courseId"]).subscribe((result:any) => {
        console.log(result);
         this.materials=result;
      });
    })

  }

  ngOnInit(): void {
  }
}

interface Material {
  id: number;
  uploadName: string; 
  courseName: string;
  fileUrl: string; // URL of the PDF file
}