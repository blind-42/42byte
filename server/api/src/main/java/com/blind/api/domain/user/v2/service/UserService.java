package com.blind.api.domain.user.v2.service;

import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.repository.UserRepository;

import com.blind.api.global.exception.BusinessException;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public User findById(Long userId){
        return userRepository.findById(userId).orElseThrow(() -> new BusinessException("{invalid.request}"));
    }

    @Transactional
    public User findByHashId(String hashId){
        return userRepository.findByHashId(hashId).orElseThrow(() -> new BusinessException("{user.notfound}"));
    }

    @Transactional
    public void setRoleType(User user, RoleType type){
        user.setRoleType(type);
    }

    @Transactional
    public List<User> findAllByRoleType(RoleType roleType) {
        return userRepository.findAllByRoleType(roleType);
    }

    @Transactional
    public Page<User> findAll(Pageable pageable){
        return userRepository.findAll(pageable);
    }

    @Transactional
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    @Transactional
    public void setCheck(User user) {
        user.setIsChecked(false);
    }

    @Transactional
    public void delCheck(User user) {
        user.setIsChecked(true);
    }
}
