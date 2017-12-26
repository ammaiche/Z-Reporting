import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SignInComponent} from './signin/signIn.component';
import {SignUpComponent} from './signup/signUp.component';

const routes: Routes = [
  {path : 'signin', component : SignInComponent},
  {path : 'signup', component : SignUpComponent}
];
@NgModule({
  imports : [RouterModule.forChild(routes)]
})
export class LoginRouterModule{

}

