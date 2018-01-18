package com.zsoft.zreporting.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

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

    @ManyToMany
    @JoinTable(
        name = "user_project",
        joinColumns = {
            @JoinColumn(name = "project_name")
        },
        inverseJoinColumns = {
            @JoinColumn(name = "user_id")
        }
    )
    private List<User> users =new ArrayList<>();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
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
