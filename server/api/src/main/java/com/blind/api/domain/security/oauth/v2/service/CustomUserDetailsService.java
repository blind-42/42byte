package com.blind.api.domain.security.oauth.v2.service;

import com.blind.api.domain.security.oauth.v2.domain.UserPrincipal;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByHashId(username)
                .orElseThrow(() -> new UsernameNotFoundException("Can not find userId"));
        return UserPrincipal.create(user);
    }
}