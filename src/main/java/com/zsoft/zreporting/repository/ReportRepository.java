package com.zsoft.zreporting.repository;

import com.zsoft.zreporting.domain.Report;
import com.zsoft.zreporting.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReportRepository  extends JpaRepository<Report, Long> {

    public List<Report> findAllByUser(User user);

    public List<Report> findAllByUserAndMonth(User user, int month);

    public List<Report> findAllByUserAndYear(User user, int year);

}
