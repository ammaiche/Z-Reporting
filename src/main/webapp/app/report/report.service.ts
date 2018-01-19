import { Report } from "./report";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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

        this.httpClient.post(SERVER_API_URL+"api/report",
                                 JSON.stringify(jsonReport)).subscribe((value)=>{
            console.log(value);
        });
    }
}
