package com.zsoft.zreporting.web.rest;

import com.zsoft.zreporting.service.ReportService;
import com.zsoft.zreporting.service.dto.ReportDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ReportResource {

    @Autowired
    private ReportService reportService;

    @PostMapping("/report")
    public void registerReport(@RequestBody ReportDTO reportDTO){

        reportService.registerReport(reportDTO);

    }

}
