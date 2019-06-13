import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Route, Router } from '@angular/router';
import 'rxjs/add/operator/map'
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }
  
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return this.auth.user$.map(user => {
      if (user) return true;
      this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
      return false;
    });
  }
  


  // CanActivate() { 
  //   return this.auth.user$.map(user => {
  //     if (user) return true;
      
  //     this.router.navigate(['/login']);
  //     return false;
  //   });
  // }
}
