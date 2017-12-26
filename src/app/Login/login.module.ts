import {NgModule} from '@angular/core';
import {SignUpComponent} from './signup/signUp.component';
import {SignInComponent} from './signin/signIn.component';
import {LoginRouterModule} from './login.router.module' ;

@NgModule({
  declarations :[
    SignUpComponent,
    SignInComponent
  ],
  imports : [LoginRouterModule]
})
export class LoginModule{

}
