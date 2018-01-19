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

}
