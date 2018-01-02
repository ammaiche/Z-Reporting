import {ICalendar} from './ICalendar';

export class FrenchCalendar implements ICalendar{

  dayLabels: string[];
  monthLabels: string[];
  maxDaysPerMonth: number[];
  holidays: { monthOrder: number; days: number[] }[];

  firstDay : number;
  currentDay: number;
  currentMonth: number;
  currentYear: number;
  daysCount: number;

  private currentDate: Date;

   constructor() {

    this.currentDate = new Date();
    /**
     * I will start from monday, in order to make it order independent see comments on ICalendar
     * Order must be respected, example first box first Month
     */
    this.dayLabels = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    this.monthLabels = ['Janvier', 'Février', 'Mars', 'Avril',
                        'May', 'Juin', 'Juillet', 'Aout', 'Septembre',
                        'Octobre', 'Novembre', 'Décembre'];

    this.maxDaysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //Add an index to February

    this.holidays =[
      {
        monthOrder : 1, //Months start from 1 not 0
        days : [1]
      },
      {
       monthOrder : 12,
       days : [12, 25]
      }
    ];

    this.daysCount = 7;
    this.currentDay= this.currentDate.getDate();
    this.currentMonth = this.currentDate.getMonth()+1; //Months from 0 to 11
    this.currentYear = this.currentDate.getFullYear();

    this.currentDate.setDate(1); //We need to know the starting date
    this.firstDay = this.currentDate.getDay()==0 ? 7 : this.currentDate.getDay();
   }
  reset(date: Date): void {

    this.currentDay= date.getDate();
    this.currentMonth = date.getMonth()+1; //Months from 0 to 11
    this.currentYear = date.getFullYear();

    date.setDate(1);
    this.firstDay = date.getDay()==0 ? 7 : date.getDay();


    //Leap year??

    if((this.currentYear%4==0 && this.currentYear%100!=0) || (this.currentYear%400==0)) {  //Leap year
      this.maxDaysPerMonth[1] = 29;
    }else{
      this.maxDaysPerMonth[1] = 28;
    }
  }

}
