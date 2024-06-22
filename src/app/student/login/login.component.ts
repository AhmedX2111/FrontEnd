import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;
  loading: boolean = false;
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) {}
  ngOnInit(): void {
    if (localStorage.getItem('role') != '') {
    }

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  Onlogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.auth.Studentlogin(this.loginForm.value).subscribe(
        (next) => {
          console.log('تم الدخول');

          this.alertify.success('Welcome ' + this.loginForm.value.username);
          this.router.navigate(['student/home/main']);
        },
        (error) => {
          this.alertify.error('Incorrect Username or Password.');
          console.log('فشل في الدخول');
        }
      );
    } else {
      console.log('form is not valid');
    }
  }
}
