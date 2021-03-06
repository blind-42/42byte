package com.blind.api.domain.user.v2.repository;

import com.blind.api.domain.security.jwt.v1.domain.UserIdMapping;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByHashId(String hashId);
    Optional<User> findById(Long Id);
    List<User> findAllByRoleType(RoleType roleType);
    Page<User> findAll(Pageable pageable);
}
