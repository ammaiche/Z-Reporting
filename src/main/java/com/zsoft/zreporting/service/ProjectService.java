package com.zsoft.zreporting.service;

import com.zsoft.zreporting.domain.Project;
import com.zsoft.zreporting.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository){

        this.projectRepository = projectRepository;
    }

    public void registerProject(Project project){

        this.projectRepository.save(project);
    }


}
