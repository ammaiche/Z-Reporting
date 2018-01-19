package com.zsoft.zreporting.service.dto;

import java.io.Serializable;

public class DayDTO implements Serializable{

    private int day;
    private boolean half;

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public boolean isHalf() {
        return half;
    }

    public void setHalf(boolean half) {
        this.half = half;
    }
}
