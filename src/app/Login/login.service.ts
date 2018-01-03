import '../User/User';
import {Injectable} from '@angular/core';
import {UserService} from '../User/user.service' ;
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Observer} from 'rxjs/Observer';
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class LoginService{

  currentUser: User = null;

  constructor(private userService: UserService, private cookieService: CookieService){

  }

  logout() : void{
    this.cookieService.remove('loggedIn');
  }
  login(user: User): Observable<User>{

    const fetchedUser =  this.userService.getUser(user.email);


    if(fetchedUser){

      if((fetchedUser as User).password === user.password) {

        //Create cookie
        this.cookieService.put('loggedIn', 'true');


        return Observable.create((observer: Observer<User>) =>{

          observer.next(fetchedUser);
          observer.complete();
        });
      }
    }
    return of(null);
  }

}
