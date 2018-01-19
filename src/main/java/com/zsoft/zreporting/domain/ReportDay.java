package com.zsoft.zreporting.domain;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "report_day")
public class ReportDay implements Serializable{

    @Id
    private long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "report_id")
    private Report report;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "day")
    private Day day;

    private boolean half = false;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Report getReport() {
        return report;
    }

    public void setReport(Report report) {
        this.report = report;
    }

    public Day getDay() {
        return day;
    }

    public void setDay(Day day) {
        this.day = day;
    }

    public boolean isHalf() {
        return half;
    }

    public void setHalf(boolean half) {
        this.half = half;
    }
}
