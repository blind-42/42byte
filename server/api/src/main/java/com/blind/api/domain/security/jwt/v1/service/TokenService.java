package com.blind.api.domain.security.jwt.v1.service;

import com.blind.api.domain.security.jwt.v1.domain.Token;
import com.blind.api.domain.user.v2.domain.User;

import java.util.Optional;

public interface TokenService {
    User findUserByAccessToken(String accessToken);
    User findAdminByAccessToken(String accessToken);
    Token findByAccessToken(String accessToken);
    User findAdminByRefreshToken(String refreshToken);
    }
