import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/alertify.service';
import { AuthService } from 'src/app/student/auth.service';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css'],
})
export class DoctorLoginComponent {
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
      this.auth.Doctorlogin(this.loginForm.value).subscribe(
        (next) => {
          console.log('تم الدخول');

          this.alertify.success('Welcome ' + this.loginForm.value.username);
          this.router.navigate(['doctor/doctor-home']);
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
