package com.zsoft.zreporting.domain;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Entity
public class Day implements Serializable{

    @Id
    private int day;

    @OneToMany(mappedBy = "day")
    private List<ReportDay> reportDays = new ArrayList<>();

    public  Day(){}

    public  Day(int day){

        this.day = day;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Day day1 = (Day) o;

        return day == day1.day;
    }

    @Override
    public int hashCode() {
        return day;
    }
}
