import { Component } from '@angular/core';
import { AuthService } from 'src/app/student/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent {
  user: any = {};

  constructor(private ser: AuthService) {}

  onSubmit() {
    this.ser.DoctorRegister(this.user)
      .subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: 'Registered Successfully!',
            text: 'You have successfully registered.',
            imageUrl: '../../../assets/images/logoo.png', // Replace with the path to your image
            imageWidth: 200, // Adjust image width as needed
            imageHeight: 200, // Adjust image height as needed
            imageAlt: 'Success Image'
          });
        },
        error => {
          console.error(error);
          // Handle error, show error message to the user, etc.
        }
      );
  }
}
