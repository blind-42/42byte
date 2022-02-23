package com.blind.api.domain.user.v2.controller;

import com.blind.api.domain.user.v2.domain.User;

import javax.servlet.http.HttpServletRequest;

public interface UserController {
    User getUserInfo(HttpServletRequest request);
}
