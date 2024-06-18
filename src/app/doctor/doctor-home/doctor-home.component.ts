import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/alertify.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent {
  isExpanded: boolean = true;
  constructor(private alertify: AlertifyService, private router: Router)
  {

  }
  expand()
  {
    if(this.isExpanded == false)
    {
      this.isExpanded=true;
    }
    else{
      this.isExpanded=false;
    }
  }
  logout() {
    // Handle your logout logic here
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
