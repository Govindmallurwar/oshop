import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private auth: AuthService, private userService:UserService) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return this.auth.appUser$
    .map(appUser=>appUser.isAdmin);
  }
}
