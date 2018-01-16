import '../User/User';
import {Injectable} from '@angular/core';
import {UserService} from '../User/user.service' ;
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Observer} from 'rxjs/Observer';
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class LoginService{

  constructor(private userService: UserService, private cookieService: CookieService){

  }

  logout() : void{

    this.cookieService.remove('loggedIn');
    this.cookieService.remove('firstName');
    this.cookieService.remove('lastName');
    this.cookieService.remove('currentProject');
  }

  login(user: User): Observable<boolean |null>{

    const fetchedUser =  this.userService.getUser(user.email);


    if(fetchedUser){

      if((fetchedUser as User).password === user.password) {

        //Create cookie
        this.cookieService.put('loggedIn', 'true');
        this.cookieService.put('firstName', fetchedUser.firstName);
        this.cookieService.put('lastName', fetchedUser.lastName);
        this.cookieService.put('currentProject', fetchedUser.currentProject);

        return Observable.create((observer: Observer<boolean>) =>{

          observer.next(true);
          observer.complete();
        });
      }
    }
    return of(null);
  }

}
