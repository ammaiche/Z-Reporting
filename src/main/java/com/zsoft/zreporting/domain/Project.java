package com.zsoft.zreporting.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "project")
public class Project implements Serializable{

    public Project(){}

    public Project(String name){
        this.name = name;
    }

    @NotNull
    @Id
    private String name;

    private LocalDateTime startDate;
    private LocalDateTime endDate;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Project project = (Project) o;

        return name.equals(project.name);
    }

    @Override
    public int hashCode() {
        return name.hashCode();
    }
}
