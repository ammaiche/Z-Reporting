import { Component, OnInit } from '@angular/core';
import {LoginService} from '../Login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   date : Date;

  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit() {

    this.date = new Date();

  }

  logout(){
      this.loginService.logout();
      this.router.navigateByUrl('/signin');
  }
}
