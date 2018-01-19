package com.zsoft.zreporting.service.mapper;

import com.zsoft.zreporting.domain.Day;
import com.zsoft.zreporting.domain.Report;
import com.zsoft.zreporting.domain.ReportDay;
import com.zsoft.zreporting.service.dto.DayDTO;
import com.zsoft.zreporting.service.dto.ReportDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReportMapper {

    public ReportDTO reportToReportDTO(Report report){

        ReportDTO reportDTO = new ReportDTO();
        reportDTO.setYear(report.getYear());
        reportDTO.setMonth(report.getMonth());

        List<DayDTO> dayDTOList = report.getReportDays()
            .stream()
            .map(reportDay -> new DayDTO(reportDay.getDay().getDay(), reportDay.isHalf()))
            .collect(Collectors.toList());

        reportDTO.setWorkedDays(dayDTOList);
        return  reportDTO;

    }

    public Report reportDTOToReport(ReportDTO reportDTO){

        //Add user after conversion
        Report report = new Report();

        report.setYear(reportDTO.getYear());
        report.setMonth(reportDTO.getMonth());

        List<ReportDay> reportDayList = reportDTO.getWorkedDays()
                                        .stream()
                                        .map(dayDTO -> {

                                            ReportDay reportDay = new ReportDay();
                                            reportDay.setDay(new Day(dayDTO.getDay()));
                                            reportDay.setHalf(dayDTO.isHalf());
                                            reportDay.setReport(report);
                                            return reportDay;
                                        })
                                        .collect(Collectors.toList());

        report.setReportDays(reportDayList);

        return report;
    }

}

