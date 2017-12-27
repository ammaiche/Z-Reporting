import {NgModule} from '@angular/core';
import {SignUpComponent} from './signup/signUp.component';
import {SignInComponent} from './signin/signIn.component';
import {LoginRouterModule} from './login.router.module' ;
import {LoggedInGuard} from './loggedIn-guard';

@NgModule({
  declarations :[
    SignUpComponent,
    SignInComponent
  ],
  imports : [LoginRouterModule],
  providers : [LoggedInGuard]
})
export class LoginModule{

}
