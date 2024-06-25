import { Component } from '@angular/core';
import { AuthService } from 'src/app/student/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-reset',
  templateUrl: './student-reset.component.html',
  styleUrls: ['./student-reset.component.css'],
})
export class StudentResetComponent {
  email: string = '';

  constructor(private ser: AuthService) {}

  onSubmit() {
    console.log(this.email);
    if (this.email) {
      this.ser.DoctorReset(this.email).subscribe(
        (response) => {
          // Handle response here
          window.alert('Sent to your email');
        },
        (error) => {
          window.alert('User Not Found');
        }
      );
    }
  }
}
