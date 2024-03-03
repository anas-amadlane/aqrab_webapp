import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthenticationService} from "./AuthenticationService";
import {Observable} from "rxjs";


@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}


/*  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
// authorised so return true
      return true;
    }

// not logged in so redirect to login page
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }*/
}
