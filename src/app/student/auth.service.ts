import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'https://localhost:5001/api/Auth/';
  constructor(private http: HttpClient) {}

  register(userObj: any) {
    return this.http.post(this.baseUrl + 'StudentRegister', userObj);
  }

  Studentlogin(userObj: any) {
    return this.http.post(this.baseUrl + 'StudentLogin', userObj).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          console.log(user);
          localStorage.setItem('token', user.access_token);
          localStorage.setItem('username', user.user_name);
          localStorage.setItem('user_Id', user.user_Id);
          localStorage.setItem('role', user.role);
        }
      })
    );
  }

  StudentRegister(userObj: any) {
    return this.http.post(this.baseUrl + 'StudentRegister', userObj).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          console.log(user);
        }
      })
    );
  }

  Doctorlogin(userObj: any) {
    return this.http.post(this.baseUrl + 'DoctorLogin', userObj).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          console.log(user);
          localStorage.setItem('token', user.access_token);
          localStorage.setItem('username', user.user_name);
          localStorage.setItem('user_Id', user.user_Id);
          localStorage.setItem('role', user.role);
        }
      })
    );
  }

  DoctorRegister(userObj: any) {
    return this.http.post(this.baseUrl + 'DoctorRegister', userObj).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          console.log(user);
        }
      })
    );
  }

  DoctorReset(email: any) {
    return this.http.post(
      'https://localhost:5001/api/ResetPassword/forget/doctor',
      { email }
    );
  }

  confirmPassword(token: any, password: any) {
    return this.http.post('https://localhost:5001/api/ResetPassword/doctor', {
      password,
      token: token.split(' ').join(''),
    });
  }
}
