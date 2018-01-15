import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SignInComponent} from './signin/signIn.component';
import {SignUpComponent} from './signup/signUp.component';
import {LoggedInGuard} from './loggedIn-guard';

const routes: Routes = [
  {path : 'signin', component : SignInComponent, canActivate : [LoggedInGuard]},
  {path : 'signup', component : SignUpComponent, canActivate : [LoggedInGuard]}
];
@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class LoginRouterModule{

}

