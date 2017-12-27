import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {LoginModule} from './Login/login.module';
import {AppRoutingModule} from './app.routing.module';
import {LoginService} from './Login/login.service';
import {LoggedOutGuard} from './Login/loggedOut-guard';
import {UserService} from './User/user.service' ;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [LoginService, UserService, LoggedOutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
