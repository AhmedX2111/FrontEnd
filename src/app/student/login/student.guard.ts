import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const role = localStorage.getItem('role');
    console.log('here');
    console.log(role);
    if (role === 'Student') {
      return true;
    } else {
      // Redirect to login or another appropriate page
      this.router.navigate(['/student']);
      return false;
    }
  }
}
