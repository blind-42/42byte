package com.blind.api.domain.login.controller;

import com.blind.api.domain.user.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/")
public class LoginController {
    private final UserService userService;

    @GetMapping("{token}")
    public Object login(String token) {
        return userService.getUserByToken(token);
    }
}
