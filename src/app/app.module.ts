import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {LoginModule} from './Login/login.module';
import {AppRoutingModule} from './app.routing.module';
import {LoginService} from './Login/login.service';
import {LoggedOutGuard} from './Login/loggedOut-guard';
import {UserService} from './User/user.service' ;
import {CookieService} from 'angular2-cookie/core';
import {CalendarComponent} from './util/calendar/calendar.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule
  ],
  providers: [LoginService, UserService, LoggedOutGuard, CookieService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
