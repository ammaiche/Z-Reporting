package com.zsoft.zreporting.domain;

import java.io.Serializable;
import java.time.LocalDateTime;

public class Day implements Serializable{

    private LocalDateTime date;
    private boolean half;
    private boolean weekend;
    private boolean holiday;
}
