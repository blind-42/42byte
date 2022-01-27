package com.blind.api.domain.login.repository;

import com.blind.api.domain.user.domain.UserRefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokenRepository extends JpaRepository<UserRefreshToken, Long> {
    UserRefreshToken findByAccessToken(String accessToken);
}
