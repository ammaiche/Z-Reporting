import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {LoggedInGuard} from './Login/loggedIn-guard';
import {SignInComponent} from './Login/signin/signIn.component';
import {LoggedOutGuard} from './Login/loggedOut-guard';

const routes: Routes = [

  {path : 'home', component : HomeComponent, canActivate : [LoggedOutGuard]},
  {path : 'signin', component : SignInComponent, canActivate : [LoggedInGuard]},
  {path : '', redirectTo : 'home', pathMatch : 'full'}
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule{

}

