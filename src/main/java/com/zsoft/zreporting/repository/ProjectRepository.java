package com.zsoft.zreporting.repository;

import com.zsoft.zreporting.domain.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, String>{
}
