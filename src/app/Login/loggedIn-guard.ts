import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {LoginService} from './login.service';

@Injectable()
export class LoggedInGuard implements CanActivate{

  constructor(private loginService: LoginService, private  router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
              ): Observable<boolean> | Promise<boolean> | boolean {

    return !this.loginService.loggedIn;
  }

}
