package com.zsoft.zreporting.repository;

import com.zsoft.zreporting.domain.Project;
import com.zsoft.zreporting.domain.User;
import com.zsoft.zreporting.domain.UserProject;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserProjectRepository extends JpaRepository<UserProject, Long>{

    public List<UserProject> findAllByUser(User user);
    public List<UserProject> findAllByProject(Project project);

}
