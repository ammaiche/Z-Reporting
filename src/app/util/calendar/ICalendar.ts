export interface ICalendar{

  /**
   * In order to make it simple i suppose that the implementation of the interface
   * respects the order when inserting days
   * In order to maker it order-independent use an object of the form {label : string, order : number}
   */

  dayLabels: string[];
  monthLabels: string[];
  maxDaysPerMonth: number[];
  holidays: {
    monthOrder: number,
    days: number[]
  }[];

  firstDay: number;
  currentDay : number;
  currentMonth: number;
  currentYear: number;
  daysCount: number;
  reset(date : Date) :void;
}
