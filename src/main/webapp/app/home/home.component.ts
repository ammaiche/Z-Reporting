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

        if(!this.selectedDays[event.date]){

            this.selectedDays[event.date] =new Date(event.date).getDate();

        }else{
            delete this.selectedDays[event.date];
        }
    }
    generateReport(){

        for(let key in this.selectedDays){
            console.log(this.selectedDays[key]);
        }
    }
}
