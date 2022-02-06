package com.blind.api.domain.security.oauth.v2.repository;

import com.blind.api.domain.security.jwt.v1.domain.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRefreshTokenRepository extends JpaRepository<Token, Long> {
    Token findByHashId(String hashId);
    Token findByHashIdAndRefreshToken(String hashId, String refreshToken);
}