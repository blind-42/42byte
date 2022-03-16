package com.blind.api.domain.notification.controller;

import com.blind.api.domain.notification.domain.Noti;
import com.blind.api.domain.notification.service.NotificationService;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.service.UserService;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@AllArgsConstructor
public class NotificationControllerImpl implements NotificationController {
    private final NotificationService notificationService;
    private final UserService userService;
    private final TokenService tokenService;

    @RequestMapping(value = {"/notification"}, method= RequestMethod.GET)
    public List<Noti> getNoti(HttpServletRequest request){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        userService.delCheck(user);
        return notificationService.getNoti(user);
    }

    @RequestMapping(value = {"/notification"}, method= RequestMethod.DELETE)
    public void delNoti(HttpServletRequest request, Long id){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        notificationService.delete(id);
    }
}
