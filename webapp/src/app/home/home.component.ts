import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Point} from '../util/point/point';
import {CookieService} from 'angular2-cookie/core';
import {LoginService} from '../Login/login.service';
import {HttpClient} from "@angular/common/http";

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
  private daysWorked: {day :number, half : boolean}[];

  private totalWeekWork : number[];
  private currentUser : User;

  constructor(
              private loginService : LoginService,
              private cookieService : CookieService,
              private router : Router,
              private httpClient : HttpClient
              ) {

    this.currentUser = {

      firstName : this.cookieService.get('firstName'),
      lastName : this.cookieService.get('lastName'),
      currentProject : this.cookieService.get('currentProject'),
      email : '',
      password : ''
    };

  }

  ngOnInit() {

    this.selectedMonthTab = [];
    this.daysWorked = [];
    this.totalWeekWork =[];

      for(let i=0 ; i<7 ; i++){

          this.selectedMonthTab.push([]);
          this.totalWeekWork.push(0);
      }
  }

  logout(){

      this.loginService.logout();
      this.router.navigateByUrl('/signin');
  }

  calendarDateChange(data){

    this.selectedMonth = {
      firstDay : data.firstDay,
      monthNumber: data.monthNumber,
      monthLabel: data.monthLabel,
      monthDaysNumber: data.monthDaysNumber,
      year: data.year
    };
  }

  lockMonth(){

    this.currentDayIndex=0;
    this.daysWorked = [];

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

    for(let j =0; j<7; j++){

      this.selectedMonthTab[6][j] =0;
    }

    this.monthLabel = this.selectedMonth.monthLabel;
    this.year = this.selectedMonth.year;
    this.monthLocked = true;
  }

  isSelected(x : number, y : number){

    return this.daysWorked[new Point(x, y).hashCode()] != null;
  }

  isHalf(x : number, y : number){

    if(this.daysWorked[new Point(x, y).hashCode()]!=null){

      return this.daysWorked[new Point(x, y).hashCode()].half;

    }else{

        return false;
    }
  }

  addDay(x : number, y : number){

    const  p : Point = new Point(x,y);

    if(this.isSelected(x, y)){ //Logical delete

      if(!this.daysWorked[p.hashCode()].half){

        this.daysWorked[p.hashCode()].half = true;
        this.totalWeekWork[x] -= 0.5;
        this.totalWeekWork[6] -= 0.5; //total per week
        this.selectedMonthTab[6][y] -= 0.5; //total per day

      }else{

        this.totalWeekWork[x] -= 0.5;
        this.totalWeekWork[6] -= 0.5;
        this.selectedMonthTab[6][y] -= 0.5;
        this.daysWorked[p.hashCode()] = null;
      }

    }else{

      if(this.selectedMonthTab[x][y]!=-1){

        this.daysWorked[p.hashCode()] = {day : this.selectedMonthTab[x][y], half : false};
        this.totalWeekWork[x]++;
        this.totalWeekWork[6]++;
        this.selectedMonthTab[6][y]++;
      }
    }
  }

  selectAll() :void {

    this.daysWorked = [];

    for (let i = 0; i < 6; i++) {

      for (let j = 0; j < 7; j++) {

        if(this.selectedMonthTab[i][j] != -1){

          if(j!=6) { //Le dimanche

            this.daysWorked[new Point(i, j).hashCode()] = {day: this.selectedMonthTab[i][j], half: false};
            this.totalWeekWork[i]++;
            this.selectedMonthTab[6][j]++;
          }
        }
      }
    }

    for(let i=0; i< 6; i++){

      this.totalWeekWork[6]+=this.totalWeekWork[i];
    }
  }

  deselectAll(){

    this.daysWorked = [];
    for(let i=0; i< 7; i++){

      this.totalWeekWork[i] = 0;
      this.selectedMonthTab[6][i] = 0;
    }
  }

  testBackEnd(){

    let formData : FormData = new FormData();
    formData.append('username','ammaiche@gmail.com' );
    formData.append('password', 'Akwa222222');

    this.httpClient.post("/api/authentication", formData).subscribe();

  }
  exportToPDF(){

   /* const url = 'http://api.html2pdfrocket.com/pdf';
    const apiKey = '408b37fb-ac73-42ba-a5e0-af947f57e287';
    const body = new URLSearchParams();
    body.set('apikey', apiKey);
    body.set('value', 'Bonjour');


    this.httpClient.post(url, body ).subscribe((response)=>{

    });
*/

  }
}
