package com.blind.api.domain.user.v2.service;

import com.blind.api.domain.security.jwt.v1.domain.Token;
import com.blind.api.domain.security.jwt.v1.repository.TokenRepository;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.repository.UserRepository;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;

    public Optional<User> findById(String id){
        return userRepository.findByHashId(id);
    }

    public Optional<User> findByAccessToken(String token){
        Token savedToken = tokenRepository.findByAccessToken(token).orElse(null);
        if (savedToken == null)
            return null;
        return userRepository.findByHashId(savedToken.getHashId());
    }
}
