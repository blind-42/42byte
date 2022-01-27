package com.blind.api.domain.user.service;

import com.blind.api.domain.login.repository.TokenRepository;
import com.blind.api.domain.user.domain.User;
import com.blind.api.domain.user.domain.UserRefreshToken;
import com.blind.api.domain.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    public User getUserBy(String id){
        return userRepository.findByUserId(id);
    }
    public User getUserByToken(String token){
        UserRefreshToken userToken =  tokenRepository.findByAccessToken(token);
        if (userToken == null)
            return null;
        return userRepository.findByUserId(userToken.getUserId());
    }
}
