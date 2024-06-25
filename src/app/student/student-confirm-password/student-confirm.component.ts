import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/student/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-confirm',
  templateUrl: './student-confirm.component.html',
  styleUrls: ['./student-confirm.component.css'],
})
export class StudentConfirmComponent {
  password: string = '';
  token: string = '';

  constructor(
    private ser: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Get the token from query parameters
    this.route.queryParams.subscribe((params) => {
      this.token = params['token'] || '';
    });
  }

  onSubmit() {
    if (this.password && this.token) {
      console.log(this.password);
      console.log(this.token);
      this.ser.confirmPassword(this.token, this.password).subscribe(
        (response) => {
          // Handle response here
          console.log('Password reset successfully', response);
          Swal.fire({
            icon: 'success',
            title: 'Password Reset Succesfully!',
            text: 'You have successfully Reset.',
            imageUrl: '../../../assets/images/logoo.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Success Image',
          });
          this.router.navigate(['/student']);
        },
        (error) => {
          console.error('Error resetting password', error);
        }
      );
    }
  }
}
