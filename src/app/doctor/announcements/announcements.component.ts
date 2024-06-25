import { Component } from '@angular/core';
import { CourseService } from 'src/app/course.service';
import { Clipboard } from '@angular/cdk/clipboard';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-announ',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
})
export class AnnouncementsComponent {
  model = {
    title: '',
    message: '',
  };

  constructor(
    private coursesService: CourseService,
    private clipboard: Clipboard,
    private router: Router
  ) {}

  onSubmit() {
    if (!this.model.title || !this.model.message) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Information',
        text: 'Both title and message are required to add an announcement.',
      });
      return;
    }

    console.log('New Announcement:', this.model.title, this.model.message);
    this.coursesService
      .addAnnouncement(this.model.title, this.model.message)
      .subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Announcement Added Successfully',
            text: 'You have successfully added the announcement.',
            imageUrl: '../../../assets/images/logoo.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Success Image',
          });
        },
        error: (err) => {
          console.error('Error adding announcement:', err);
          Swal.fire({
            icon: 'error',
            title: 'Failed to Add Announcement',
            text: 'There was an error adding the announcement. Please try again later.',
          });
        },
      });
  }
}
