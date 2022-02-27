package com.blind.api.domain.user.v2.controller;

import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.repository.UserRepository;
import com.blind.api.domain.user.v2.service.UserService;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;

@RestController
@AllArgsConstructor
public class UserControllerImpl implements UserController {
    private final UserRepository userRepository;
    private final TokenService tokenService;

    @RequestMapping(value={"/user"}, method= RequestMethod.GET)
    public User getUserInfo(HttpServletRequest request) {
        return tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
    }

}
