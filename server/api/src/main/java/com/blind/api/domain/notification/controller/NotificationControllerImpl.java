package com.blind.api.domain.notification.controller;

import com.blind.api.domain.notification.DTO.NotiDTO;
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
import java.util.ArrayList;
import java.util.List;

@RestController
@AllArgsConstructor
public class NotificationControllerImpl implements NotificationController {
    private final NotificationService notificationService;
    private final UserService userService;
    private final TokenService tokenService;

    @RequestMapping(value = {"/notification"}, method= RequestMethod.GET)
    public List<NotiDTO> getNoti(HttpServletRequest request){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        List<Noti> notiList = notificationService.getNoti(user);
        List<NotiDTO> dtoList = new ArrayList<>();
        notiList.stream().forEach(noti -> {
            dtoList.add(new NotiDTO(noti));
        });
        userService.delCheck(user);
        return dtoList;
    }

    @RequestMapping(value = {"/notification"}, method= RequestMethod.DELETE)
    public void delNoti(HttpServletRequest request, Long id){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        notificationService.delete(id);
    }

    @RequestMapping(value = {"/notification/all"}, method= RequestMethod.DELETE)
    public void delAllNoti(HttpServletRequest request, Long id){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        notificationService.deleteByUser(user);
    }
}
