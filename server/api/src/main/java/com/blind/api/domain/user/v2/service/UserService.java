package com.blind.api.domain.user.v2.service;

import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.repository.UserRepository;

import com.blind.api.global.exception.BusinessException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public Optional<User> findById(String id){
        return userRepository.findByHashId(id);
    }

    @Transactional
    public User findByHashId(String hashId){
        return userRepository.findByHashId(hashId).orElseThrow(() -> new BusinessException("{user.notfound}"));
    }
}
