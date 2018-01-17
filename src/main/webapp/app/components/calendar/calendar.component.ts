import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment/moment';

import { Day, SelectionEvent, SelectionType } from './model';

@Component({
    selector: 'jhi-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['calendar.scss']
})
export class CalendarComponent implements OnInit{

    /**
     * The configuration of the calendar.
     */
    _langKey = 'fr';
    @Input()
    set langKey(langKey: string) {
        this._langKey = langKey;
    }

    _holidays: string[] = [];
    @Input()
    set holidays(holidays: string[]) {
        if (this._holidays.length != 0 || (holidays || []).length != 0) {
            this._holidays = holidays;
            this.buildDays();
        }
    }

    _allDays: string[] = [];
    @Input()
    set allDays(allDays: string[]) {
        if (this._allDays.length != 0 || (allDays || []).length != 0) {
            this._allDays = allDays;
            this.buildDays();
        }
    }

    _halfDays: string[] = [];
    @Input()
    set halfDays(halfDays: string[]) {
        if (this._halfDays.length != 0 || (halfDays || []).length != 0) {
            this._halfDays = halfDays;
            this.buildDays();
        }
    }
    /**
     * Event emitted when selection changes.
     */
    @Output()
    daySelected = new EventEmitter<SelectionEvent>();
    /**
     * The collection of days.
     */
    days: Day[];
    /**
     * The selected month.
     */
    month = moment().startOf('month');
    /**
     * The variable that contains the current day.
     */
    today = moment();
    /**
     * The First selected day in the calendar for shift select and mouse hold select.
     */
    shiftDayStart: Day;
    mouseDayStart: Day;

    searchFormat = 'YYYY-MM-DD';

    constructor() {
        this.buildDays();
    };

    ngOnInit() {
        this.buildDays();
    }

    buildDays() {
        const start = this.month.clone().startOf('month').isoWeekday(1);
        const end = this.month.clone().endOf('month').isoWeekday(7);
        let days: Day[] = [];
        while (start.isSameOrBefore(end, 'day')) {
            let selectionType = SelectionType.NONE;
            if ((this._allDays || []).indexOf(start.format(this.searchFormat)) > -1) {
                selectionType = SelectionType.ALL_DAY;
            } else if ((this._halfDays || []).indexOf(start.format(this.searchFormat)) > -1) {
                selectionType = SelectionType.HALF_DAY;
            }
            days.push({
                date: start.clone(),
                selectionType: selectionType,
                weekend: start.isoWeekday() > 5,
                holiday: (this._holidays || []).indexOf(start.format(this.searchFormat)) > -1,
                hover: false
            });
            start.add(1, 'day');
        }
        this.days = days;
    }

    mouseDown(day: Day) {
        this.mouseDayStart = day;
    }

    mouseUp(event: MouseEvent, day: Day) {
        if (this.mouseDayStart !== day) {
            this.bulkSelection(this.mouseDayStart, day);
            this.mouseDayStart = null;
        } else {
            this.select(event, day);
        }
    }

    select(event: MouseEvent, day: Day) {
        if (day.holiday || day.weekend) {
            return;
        }
        this.hoverReset();
        this.toggleSelection(day, event.shiftKey);
        if (event.shiftKey) {
            if (this.shiftDayStart == null) {
                this.shiftDayStart = day;
            } else {
                this.bulkSelection(this.shiftDayStart, day, true);
                this.shiftDayStart = null;
            }
        } else {
            if (day.selectionType !== SelectionType.ALL_DAY || this.shiftDayStart === day) {
                this.shiftDayStart = null;
            } else {
                this.shiftDayStart = day;
            }
        }
    }

    bulkSelection(start: Day, end: Day, isShift = false) {
        if (start == null || end == null) {
            return;
        }
        if (start.date.isAfter(end.date, 'day')) {
            let swap = start;
            start = end;
            end = swap;
        }
        this.days
            .filter((d) => !d.weekend && !d.holiday)
            .filter((d) => d.date.isBetween(start.date, end.date, 'day', isShift ? '()' : '[]'))
            .forEach((d) => this.toggleSelection(d, true));
    }

    hover(event: MouseEvent, end: Day) {
        let start: Day = null;
        if (event.buttons == 1 || event.buttons == 3) {
            start = this.mouseDayStart;
        } else if (event.shiftKey) {
            start = this.shiftDayStart;
        }
        this.hoverReset();
        if (start == null || end == null) {
            return;
        }
        if (start.date.isAfter(end.date, 'day')) {
            let swap = start;
            start = end;
            end = swap;
        }
        this.days
            .filter((d) => !d.weekend && !d.holiday)
            .filter((d) => d.date.isBetween(start.date, end.date, 'day', '[]'))
            .forEach((d) => {
                d.hover = true;
            });
    };

    hoverReset() {
        this.days.forEach((d) => d.hover = false);
    };

    next() {
        this.month.add(1, 'month');
        this.shiftDayStart = null;
        this.buildDays();

    };

    previous() {
        this.month.subtract(1, 'month');
        this.shiftDayStart = null;
        this.buildDays();
    };

    toggleSelection(day: Day, simpleToggle: boolean) {
        day.selectionType = (day.selectionType + 1) % 3;
        if (day.selectionType === SelectionType.HALF_DAY && simpleToggle) {
            day.selectionType = SelectionType.NONE;
        }
        this.daySelected.emit({
            date: day.date.format(this.searchFormat),
            selected: day.selectionType != SelectionType.NONE,
            halfDay: day.selectionType == SelectionType.HALF_DAY
        });
    }
}
