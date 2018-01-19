import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Account, LoginModalService, Principal } from '../shared';
import { Report, ReportService } from '../report';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.scss'
    ]

})
export class HomeComponent implements OnInit {

    account: Account;
    modalRef: NgbModalRef;
    anySelected = false;

    previousSelectedDate : Date;
    selectedYear  : number;
    selectedMonth : number;
    selectedDays  =[];

    constructor(

        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private reportService : ReportService){}

    ngOnInit() {

        this.principal.identity().then((account) => {
            this.account = account;
        });

        this.registerAuthenticationSuccess();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }

    daySelected(event: any) {

        //We check if we changed the month or the year

        if(this.previousSelectedDate){

            const temp  = new Date(event.date);

            if(temp.getMonth() != this.previousSelectedDate.getMonth() ||
                temp.getFullYear() != this.previousSelectedDate.getFullYear()){

                this.selectedDays = [];
            }

        }
        this.previousSelectedDate = new Date(event.date);

        this.selectedYear = this.previousSelectedDate.getFullYear();
        this.selectedMonth =  this.previousSelectedDate.getMonth() + 1; //Months start from 0 in Date library

        if(!this.selectedDays[event.date]){

            this.selectedDays[event.date] = {
                date : new Date(event.date).getDate(),
                half : false
            };

        }else{

            if(this.selectedDays[event.date].half){

                delete this.selectedDays[event.date];

            }else{
                this.selectedDays[event.date].half =true;
            }
        }
    }

    generateReport(){

        const report : Report = new Report(this.selectedMonth, this.selectedYear);

        for(let key in this.selectedDays){

            report.workedDays.push({
                day : this.selectedDays[key].date,
                half : this.selectedDays[key].half
            });

        }
        this.reportService.saveReport(report);
    }
}
