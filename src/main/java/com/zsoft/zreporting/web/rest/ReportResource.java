package com.zsoft.zreporting.web.rest;

import com.zsoft.zreporting.service.dto.ReportDTO;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ReportResource {

    @PostMapping("/report")
    public void registerReport(@RequestBody ReportDTO reportDTO){


    }

}
