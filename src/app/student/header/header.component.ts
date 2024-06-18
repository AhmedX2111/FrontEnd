import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/alertify.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userName = "Account";
  AccountName: string = '';
  constructor(private alertify: AlertifyService, private router: Router) {

  }
  ngOnInit(): void {
    const storedUsername = localStorage.getItem('username');

    if (storedUsername !== null) {
      this.AccountName = storedUsername;
    } else {
      // Handle the case where the username is null
    }
  }
  LoggedIn() {
    const token = localStorage.getItem('token');
    var user_name = localStorage.getItem('username') as string;
    this.userName = user_name;


    return !token;
  }
  LogOut() {

    this.alertify.confirm("Are you sure you want to Log Out?", () => {
      // Action to perform when the user clicks "OK"
      this.ClearLocalstorage();
      this.router.navigate(['../']);
     
    });

  }
  ClearLocalstorage() {
    localStorage.clear();
    console.log('تم الخروج');
  }
}
