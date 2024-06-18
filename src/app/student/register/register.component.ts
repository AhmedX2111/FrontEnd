import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {};

  constructor(private ser: AuthService) {}

  onSubmit() {
    this.ser.StudentRegister(this.user)
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
