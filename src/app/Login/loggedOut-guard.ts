import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class LoggedOutGuard implements CanActivate{
  constructor(private router : Router,
              private cookieService: CookieService){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {

    if(!this.cookieService.get('loggedIn')) {

      this.router.navigateByUrl('/signin');

    }else{
      return true;
    }

  }


}
