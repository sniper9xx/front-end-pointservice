import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
	constructor(
		private router: Router,
        private userService: UserService
        ){};

  canActivate() {
    return true;
  }
  
}
