import '../User/User';
import {Injectable} from '@angular/core';
import {UserService} from '../User/user.service' ;
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class LoginService{

  loggedIn = false;

  constructor(private userService: UserService){

  }

  login(user: User): Observable<User>{

    const fetchedUser =  this.userService.getUser(user.email);

    if(fetchedUser){

      if((fetchedUser as User).password === user.password) {

        return Observable.create((observer: Observer<User>) =>{

          observer.next(fetchedUser);
          observer.complete();
        });
      }
    }
    return of(null);
  }

}
