package com.zsoft.zreporting.service.dto;

import java.io.Serializable;
import java.util.List;

public class ReportDTO implements Serializable{

    private int year;
    private int month;

    private List<DayDTO> workedDays;


    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public List<DayDTO> getWorkedDays() {
        return workedDays;
    }

    public void setWorkedDays(List<DayDTO> workedDays) {
        this.workedDays = workedDays;
    }


}
