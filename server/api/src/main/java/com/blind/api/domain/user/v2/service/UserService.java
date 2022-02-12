package com.blind.api.domain.user.v2.service;

import com.blind.api.domain.security.jwt.v1.domain.Token;
import com.blind.api.domain.security.jwt.v1.repository.TokenRepository;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.repository.UserRepository;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;

    @Transactional
    public Optional<User> findById(String id){
        return userRepository.findByHashId(id);
    }

    @Transactional
    public boolean compareUser(Long userId, String token){
        Long sessionUserId = findByAccessToken(token)
                .orElseThrow(RuntimeException::new)
                .getId();
        if (userId != sessionUserId)
            return false;
        return true;
    }

    @Transactional
    public Optional<User> findByAccessToken(String token){
        Token savedToken = tokenRepository.findByAccessToken(token).orElse(null);
        if (savedToken == null)
            return null;
        return userRepository.findByHashId(savedToken.getHashId());
    }
}
