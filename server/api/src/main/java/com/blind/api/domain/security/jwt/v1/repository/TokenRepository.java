package com.blind.api.domain.security.jwt.v1.repository;

import com.blind.api.domain.security.jwt.v1.domain.Token;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TokenRepository extends JpaRepository<Token, Long> {
    Optional<Token> findByAccessToken(String accessToken);
    Optional<User> findUserByAccessToken(String accessToken);
}
