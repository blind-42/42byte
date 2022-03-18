package com.blind.api.domain.notification.controller;

import com.blind.api.domain.notification.DTO.NotiDTO;
import com.blind.api.domain.notification.DTO.NotiResponseDTO;
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
    private final TokenService tokenService;
    private final UserService userService;

    @RequestMapping(value = {"/notification"}, method= RequestMethod.GET)
    public NotiResponseDTO getNoti(HttpServletRequest request){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        List<Noti> notiList = notificationService.getNoti(user);
        NotiResponseDTO notiResponseDTO = new NotiResponseDTO<>();
        notiList.stream().forEach(noti -> {
            notiResponseDTO.getContents().add(new NotiDTO(noti));
        });
        notiResponseDTO.setTotal(notificationService.getUnchecked(user));
        return notiResponseDTO;
    }

    @RequestMapping(value = {"/notification/check"}, method= RequestMethod.PUT)
    public void checkNoti(HttpServletRequest request, Long id){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Noti noti = notificationService.findById(user, id);
        notificationService.checkNoti(noti);
        if (notificationService.getUnchecked(user) == 0)
            userService.delCheck(user);
    }

    @RequestMapping(value = {"/notification/check/all"}, method= RequestMethod.PUT)
    public void checkAllNoti(HttpServletRequest request){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        notificationService.checkAllNoti(user);
        userService.delCheck(user);
    }

    @RequestMapping(value = {"/notification"}, method= RequestMethod.DELETE)
    public void delNoti(HttpServletRequest request, Long id){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        notificationService.deleteOne(user, id);
        if (notificationService.getUnchecked(user) == 0)
            userService.delCheck(user);
    }

    @RequestMapping(value = {"/notification/all"}, method= RequestMethod.DELETE)
    public void delAllNoti(HttpServletRequest request){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        notificationService.deleteByUser(user);
        userService.delCheck(user);
    }
}
