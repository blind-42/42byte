package com.blind.api.domain.security.oauth.v2.repository;

import com.blind.api.domain.security.jwt.v1.domain.Token;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRefreshTokenRepository extends JpaRepository<Token, Long> {
    Token findByUser(User user);
    Token findByUserAndRefreshToken(User user, String refreshToken);
    Token findByRefreshToken(String token);
}