import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
    ZreportingSharedLibsModule,
    ZreportingSharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    JhiLoginModalComponent,
    Principal,
    HasAnyAuthorityDirective,
} from './';


import {
    CalendarModule,
    CalendarComponent
} from '../components';


@NgModule({
    imports: [
        ZreportingSharedLibsModule,
        ZreportingSharedCommonModule,
        CalendarModule
    ],
    declarations: [
        JhiLoginModalComponent,
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        ZreportingSharedCommonModule,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe,
        CalendarComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ZreportingSharedModule {}
