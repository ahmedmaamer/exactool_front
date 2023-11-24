import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return this.userService.isAuthenticated().then(
      isAuthenticated => {
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigate(['/authentication']);
          return false;
        }
      })
      
  }
  
}