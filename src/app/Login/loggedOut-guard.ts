import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {LoginService} from './login.service';

@Injectable()
export class LoggedOutGuard implements CanActivate{
  constructor(private loginService: LoginService, private router : Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {

    if(!this.loginService.loggedIn) this.router.navigateByUrl('/signin');
    else return true;

  }


}
