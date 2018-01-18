package com.zsoft.zreporting.repository;

import com.zsoft.zreporting.domain.PersistentToken;
import com.zsoft.zreporting.domain.User;
import java.time.LocalDate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data JPA repository for the PersistentToken entity.
 */
@Repository
public interface PersistentTokenRepository extends JpaRepository<PersistentToken, String> {

    List<PersistentToken> findByUser(User user);

    List<PersistentToken> findByTokenDateBefore(LocalDate localDate);

}
