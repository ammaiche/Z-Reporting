import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {LoginService} from './login.service';
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class LoggedInGuard implements CanActivate{

  constructor(private loginService: LoginService,
              private  router: Router,
              private cookieService : CookieService){

  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
              ): Observable<boolean> | Promise<boolean> | boolean {

    if(!this.cookieService.get('loggedIn')){
      return true;
    }
    else {
      this.router.navigateByUrl('/home');
    }
  }

}
