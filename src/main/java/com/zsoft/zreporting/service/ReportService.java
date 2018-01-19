package com.zsoft.zreporting.service;

import com.zsoft.zreporting.domain.Report;
import com.zsoft.zreporting.repository.ReportRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class ReportService{

    ReportRepository reportRepository;

    public ReportService(ReportRepository reportRepository){

        this.reportRepository = reportRepository;
    }

    public void registerReport(Report report){


    }

}
