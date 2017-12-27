import {NgModule} from '@angular/core';
import {SignUpComponent} from './signup/signUp.component';
import {SignInComponent} from './signin/signIn.component';
import {LoginRouterModule} from './login.router.module' ;
import {LoggedInGuard} from './loggedIn-guard';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations :[
    SignUpComponent,
    SignInComponent
  ],
  imports : [LoginRouterModule, SharedModule],
  providers : [LoggedInGuard]
})
export class LoginModule{

}
