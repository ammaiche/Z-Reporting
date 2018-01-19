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

        System.out.println("Year "+reportDTO.getYear());
        System.out.println("Month "+reportDTO.getMonth());

        reportDTO.getWorkedDays().forEach((dayDTO ->{
            System.out.println("{ day : "+dayDTO.getDay()+", half : "+dayDTO.isHalf()+"}");
        } ));

        System.out.println();
    }

}
