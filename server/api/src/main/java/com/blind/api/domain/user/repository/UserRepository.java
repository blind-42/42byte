package com.blind.api.domain.user.repository;

import com.blind.api.domain.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUserSeq(Long id);
    User findByUserId(String id);
}
