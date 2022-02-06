package com.blind.api.domain.user.v2.repository;

import com.blind.api.domain.security.jwt.v1.domain.UserIdMapping;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByHashId(String hashId);
    Optional<User> findById(Long Id);
}
