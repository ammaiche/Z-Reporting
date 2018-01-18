package com.zsoft.zreporting.domain;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_project")
public class UserProject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "project_name")
    private String projectName;

    @Column(name = "start_date")
    private LocalDateTime startDate;

    @Column(name = "end_date")
    private LocalDateTime endDate;

}
