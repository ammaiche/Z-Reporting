package com.zsoft.zreporting.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;


@Entity
public class Day implements Serializable{

    @Id
    private int day;

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
}
