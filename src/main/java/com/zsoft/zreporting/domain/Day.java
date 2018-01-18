package com.zsoft.zreporting.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Day implements Serializable{

    @Id
    private int date;
}
