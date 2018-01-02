import { Component, OnInit } from '@angular/core';
import {LoginService} from '../Login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private monthLocked : boolean;
  private selectedMonthTab : number[][];
  private selectedMonth : {firstDay : number, monthNumber: number, monthLabel : string, monthDaysNumber :number, year: number};
  private currentDayIndex =0;
  private monthLabel : string;
  private year: number;

  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit() {

    this.selectedMonthTab = [];

      for(let i=0; i<6; i++){
          this.selectedMonthTab.push([]);
      }
  }
  logout(){

      this.loginService.logout();
      this.router.navigateByUrl('/signin');
  }
  calendarDateChange(data){

    this.currentDayIndex=0;

    this.selectedMonth = {
      firstDay : data.firstDay,
      monthNumber: data.monthNumber,
      monthLabel: data.monthLabel,
      monthDaysNumber: data.monthDaysNumber,
      year: data.year
    };
  }

  lockMonth(){

    for(let i =0; i<6; i++){

      for(let j =0; j<7; j++){

        if(i==0){

          if(j<this.selectedMonth.firstDay-1) {

            this.selectedMonthTab[i][j] =-1;
          }
          else{

            this.selectedMonthTab[i][j] = ++this.currentDayIndex;
          }

        }else{

          if(++this.currentDayIndex <= this.selectedMonth.monthDaysNumber){

            this.selectedMonthTab[i][j] = this.currentDayIndex;

          }else{

            this.selectedMonthTab[i][j] =-1;
          }

        }
      }
    }

    this.monthLabel = this.selectedMonth.monthLabel;
    this.year = this.selectedMonth.year;
    this.monthLocked = true;
  }

}
