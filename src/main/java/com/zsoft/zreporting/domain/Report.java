package com.zsoft.zreporting.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Report implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int  month;
    private int  year;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "report")
    private List<ReportDay> reportDays = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<ReportDay> getReportDays() {
        return reportDays;
    }

    public void setReportDays(List<ReportDay> reportDays) {
        this.reportDays = reportDays;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Report report = (Report) o;

        if (month != report.month) return false;
        if (year != report.year) return false;
        if (!id.equals(report.id)) return false;
        return user.equals(report.user);
    }

    @Override
    public int hashCode() {
        int result = month;
        result = 31 * result + year;
        result = 31 * result + (user != null ? user.hashCode() : 0);
        result = 31 * result + (reportDays != null ? reportDays.hashCode() : 0);
        return result;
    }
}
