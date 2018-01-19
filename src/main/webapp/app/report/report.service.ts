import { Report } from "./report";
import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { SERVER_API_URL } from "../app.constants";

@Injectable()
export class ReportService{

    constructor(private httpClient : HttpClient){

    }
    saveReport(report : Report){

        const jsonReport  = {

            year  : report.year,
            month : report.month,
            workedDays  : report.workedDays
        };

        const httpHeaders  = new HttpHeaders();
        httpHeaders.set('Content Type', 'application/json; charset=utf-8');

        console.log(JSON.stringify(jsonReport));

        this.httpClient
            .post(SERVER_API_URL+"api/report",
                                 jsonReport, {headers: httpHeaders})
            .subscribe((value)=>{

            console.log(value);
        });
    }
}
