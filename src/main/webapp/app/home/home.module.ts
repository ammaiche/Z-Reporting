import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ZreportingSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';
import {CalendarComponent} from '../calendarUtils/calendar/calendar.component';

@NgModule({
    imports: [
        ZreportingSharedModule,
        RouterModule.forChild([ HOME_ROUTE ])
    ],
    declarations: [
        HomeComponent,
        CalendarComponent
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZreportingHomeModule {}
