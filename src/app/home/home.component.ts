import { Component, OnInit } from '@angular/core';
import {LoginService} from '../Login/login.service';
import {Router} from '@angular/router';
import {Point} from '../util/point/point';

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

  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit() {

    this.selectedMonthTab = [];
    this.daysWorked = [];

      for(let i=0; i<6; i++){
          this.selectedMonthTab.push([]);
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

      }else{

        this.daysWorked[p.hashCode()] = null;
      }

    }else{

      this.daysWorked[p.hashCode()] = {day : this.selectedMonthTab[x][y], half : false};
    }
  }

  selectAll() :void {

    this.daysWorked = [];

    for (let i = 0; i < 6; i++) {

      for (let j = 0; j < 7; j++) {

        this.daysWorked[new Point(i,j).hashCode()] = {day : this.selectedMonthTab[i][j], half : false};
      }
    }
  }

  deselectAll(){

    this.daysWorked = [];
  }

}
