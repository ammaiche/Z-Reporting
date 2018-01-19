package com.zsoft.zreporting.service;

import com.zsoft.zreporting.domain.Report;
import com.zsoft.zreporting.domain.User;
import com.zsoft.zreporting.repository.ReportRepository;
import com.zsoft.zreporting.service.dto.ReportDTO;
import com.zsoft.zreporting.service.mapper.ReportMapper;
import org.springframework.stereotype.Service;

@Service
public class ReportService{

    private  final ReportRepository reportRepository;
    private  final ReportMapper reportMapper;
    private  final UserService userService;

    public ReportService(ReportRepository reportRepository, ReportMapper reportMapper, UserService userService){

        this.reportRepository = reportRepository;
        this.reportMapper = reportMapper;
        this.userService = userService;
    }

    public void registerReport(ReportDTO reportDTO){

       Report report = reportMapper.reportDTOToReport(reportDTO);

       User currentUser = userService.getUserWithAuthorities().get();

       report.setUser(currentUser);

        System.out.println(report.getMonth());
        System.out.println(report.getYear());
        report.getReportDays().forEach(reportDay ->System.out.println(reportDay.getDay().getDay()));

        reportRepository.save(report);

    }

}
