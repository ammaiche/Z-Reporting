import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {LoginModule} from './Login/login.module';
import {AppRoutingModule} from './app.routing.module';
import {LoginService} from './Login/login.service';
import {LoggedOutGuard} from './Login/loggedOut-guard';

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
  providers: [LoginService, LoggedOutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
