package com.blind.api.domain.user.v2.controller;

import com.blind.api.domain.user.v2.service.UserService;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@AllArgsConstructor
public class UserController {
    private final UserService userService;

    @RequestMapping(value={"/user"}, method= RequestMethod.GET)
    public Object getUserInfo(HttpServletRequest request) {
        User user = userService.findByAccessToken(HeaderUtil.getAccessToken(request)).orElseThrow(null);
        return user;
    }
}