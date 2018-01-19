import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ZreportingSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';
import { ReportService } from '../report';

import { CalendarComponent } from '../components'

@NgModule({
    imports: [
        ZreportingSharedModule,
        RouterModule.forChild([ HOME_ROUTE ])
    ],
    declarations: [
        HomeComponent
    ],
    entryComponents: [
    ],
    providers: [
        ReportService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZreportingHomeModule {}
