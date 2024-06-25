import { Component } from '@angular/core';
import { AuthService } from 'src/app/student/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-reset',
  templateUrl: './doctor-reset.component.html',
  styleUrls: ['./doctor-reset.component.css'],
})
export class DoctorResetComponent {
  email: string = '';

  constructor(private ser: AuthService) {}

  onSubmit() {
    console.log(this.email);
    if (this.email) {
      this.ser.DoctorReset(this.email).subscribe(
        (response) => {
          // Handle response here
        },
        (error) => {
          window.alert('User Not Found');
        }
      );
    }
  }
}
