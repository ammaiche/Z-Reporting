import {ICalendar} from './ICalendar';
import {FrenchCalendar} from './frenchCalendar';
import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector : 'app-calendar',
  templateUrl : './calendar.component.html',
  styleUrls : ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{


  private calendar: ICalendar ;
  private tabCalendar: number[][] = []; //Calendar that will be displayed

  private selectedMonthLabel : string;
  private selectedMonth : number;
  private selectedDay : number;
  private selectedYear : number;
  private selectedBox : {x: number, y: number}= {x: -1, y: -1};

  private currentMonthDayIndex =0;
  private nextMonthDayIndex = 0;
  private previousMonthDayIndex :number;

  private firstFill=true;

  //Events

  @Output('onDateChange')
    dateChange = new EventEmitter();

  constructor(){
  }

  ngOnInit(): void {

    this.calendar = new FrenchCalendar();
    this.selectedMonthLabel = this.calendar.monthLabels[this.calendar.currentMonth-1];
    this.selectedMonth = this.calendar.currentMonth;
    this.selectedYear = this.calendar.currentYear;
    this.selectedDay = this.calendar.currentDay;

    this.dateChange.emit({
        firstDay : this.calendar.firstDay,
        monthNumber : this.selectedMonth,
        monthLabel : this.selectedMonthLabel,
        monthDaysNumber : this.calendar.maxDaysPerMonth[this.selectedMonth-1],
        year : this.selectedYear,
      }
    );

    for(let i=0; i<6 ; i++){
      this.tabCalendar.push([]);
    }
    this.fillTabCalendar(this.calendar.currentMonth-1);
  }

  //month : actual month (index from 0)
  private fillTabCalendar(month : number) : void{

    this.previousMonthDayIndex = this.calendar.maxDaysPerMonth[((month-1)+12)%12]-this.calendar.firstDay+2;

    for(let i=0; i<6 ; i++){ //6 lines on calendar

      for(let j=0; j<this.calendar.daysCount; j++){ //7 columns for 7 days

      if(i==0) {

          if (j < this.calendar.firstDay - 1) {//-1 because days start from 1
            this.tabCalendar[i][j] = this.previousMonthDayIndex++;

          }else{
            this.tabCalendar[i][j] = ++this.currentMonthDayIndex;
          }
        }else{

          if(++this.currentMonthDayIndex<=this.calendar.maxDaysPerMonth[month]){
            this.tabCalendar[i][j] = this.currentMonthDayIndex;
          }else{
            this.tabCalendar[i][j] = ++this.nextMonthDayIndex;
          }
        }
        if(this.tabCalendar[i][j]==this.selectedDay && this.firstFill) {
            this.firstFill = false;
            this.selectBox(i,j);
        }
      }
    }
  }

  private reinitialize() : void{

    this.selectedMonthLabel = this.calendar.monthLabels[this.selectedMonth-1];
    this.currentMonthDayIndex=0;
    this.nextMonthDayIndex=0;

    let date : Date = new Date();
    date.setFullYear(this.selectedYear, this.selectedMonth-1, 1);
    this.calendar.reset(date);
    this.fillTabCalendar(this.selectedMonth-1);
  }

  private selectBox(x: number, y: number){

    this.selectedBox.x = x;
    this.selectedBox.y = y;
    this.selectedDay = this.tabCalendar[x][y];

    //Because we have also some of the days of previous and next month we check if the month changes
    if((this.selectedDay>20) &&(this.selectedBox.x<2)){

      this.selectedMonth = this.calendar.currentMonth-1;

      if(this.selectedMonth==0){

        this.selectedMonth=12;
        this.selectedYear--;
      }

    }else if((this.selectedDay<20)&&(this.selectedBox.x>=4)){

      this.selectedMonth = (this.calendar.currentMonth % 12)+1
      if(this.selectedMonth==1) this.selectedYear++;
    }else{

        this.selectedMonth = this.calendar.currentMonth;
        this.selectedYear = this.calendar.currentYear;
    }


    /*this.dateChange.emit({
                                firstDay : this.calendar.first,
                                monthNumber : this.selectedMonth,
                                monthLabel : this.selectedMonthLabel,
                                monthDaysNumber : this.calendar.maxDaysPerMonth[this.selectedMonth-1],
                                year : this.selectedYear,
                              }
                        );
    */
  }
  private checkBox(x: number, y: number): boolean{
      return (x==this.selectedBox.x && y==this.selectedBox.y);
  }
  private nextMonth(){

    this.selectedMonth = (this.selectedMonth % 12) + 1 ;
    if(this.selectedMonth==1) this.selectedYear++;
    this.reinitialize();

    this.dateChange.emit({
      firstDay : this.calendar.firstDay,
      monthNumber : this.selectedMonth,
        monthLabel : this.selectedMonthLabel,
        monthDaysNumber : this.calendar.maxDaysPerMonth[this.selectedMonth-1],
        year : this.selectedYear,
      }
    );
  }
  private previousMonth(){

    if(--this.selectedMonth==0) {
      this.selectedYear--;
      this.selectedMonth=12;
    }
    this.reinitialize();

    this.dateChange.emit({
      firstDay : this.calendar.firstDay,
      monthNumber : this.selectedMonth,
        monthLabel : this.selectedMonthLabel,
        monthDaysNumber : this.calendar.maxDaysPerMonth[this.selectedMonth-1],
        year : this.selectedYear,
      }
    );
  }

  private nextYear(){

    this.selectedYear++;
    this.reinitialize();

    this.dateChange.emit({
      firstDay : this.calendar.firstDay,
      monthNumber : this.selectedMonth,
        monthLabel : this.selectedMonthLabel,
        monthDaysNumber : this.calendar.maxDaysPerMonth[this.selectedMonth-1],
        year : this.selectedYear,
      }
    );
  }
  private previousYear(){

    this.selectedYear--;
    this.reinitialize();

    this.dateChange.emit({
      firstDay : this.calendar.firstDay,
      monthNumber : this.selectedMonth,
        monthLabel : this.selectedMonthLabel,
        monthDaysNumber : this.calendar.maxDaysPerMonth[this.selectedMonth-1],
        year : this.selectedYear,
      }
    );
  }

}
