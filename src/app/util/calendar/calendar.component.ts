import {ICalendar} from './ICalendar';
import {FrenchCalendar} from './frenchCalendar';
import {Component, OnInit} from '@angular/core';

@Component({
  selector : 'app-calendar',
  templateUrl : './calendar.component.html'
})
export class CalendarComponent implements OnInit{


  calendar: ICalendar ;
  tabCalendar: number[][] = []; //Calendar that will be displayed

  selectedMonthLabel : string;
  selectedDayLabel : string;
  selectedMonth : number;
  selectedDay : number;
  selectedYear : number;

  private currentMonthDayIndex =0;
  private nextMonthDayIndex = 0;
  private previousMonthDayIndex :number;

  constructor(){

    //shortcuts;
  }

  ngOnInit(): void {

    this.calendar = new FrenchCalendar();
    this.selectedMonthLabel = this.calendar.monthLabels[this.calendar.currentMonth-1];
    this.selectedDayLabel =  this.calendar.dayLabels[this.calendar.currentDay-1];

    this.selectedMonth = this.calendar.currentMonth;
    this.selectedYear = this.calendar.currentYear;

    for(let i=0; i<6 ; i++){
      this.tabCalendar.push([]);
    }

    this.fillTabCalendar(this.calendar.currentMonth-1);
  }

  //month : actual month (index from 0)
  private fillTabCalendar(month : number) : void{

    this.previousMonthDayIndex = this.calendar.maxDaysPerMonth[((month-1)+12)%12]-this.calendar.currentDay+2;

    for(let i=0; i<6 ; i++){ //6 lines on calendar

      for(let j=0; j<this.calendar.daysCount; j++){ //7 columns for 7 days

      if(i==0) {

          if (j < this.calendar.currentDay - 1) {//-1 because days start from 1
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

  onNextMonth(){
    this.selectedMonth = (this.selectedMonth % 12) + 1 ;
    this.reinitialize();
  }
  onPreviousMonth(){

    if(--this.selectedMonth==0) this.selectedMonth=12;
    this.reinitialize();
  }

  onNextYear(){
    this.selectedYear++;
    this.reinitialize();
  }
  onPreviousYear(){
    this.selectedYear--;
    this.reinitialize();
  }

}
