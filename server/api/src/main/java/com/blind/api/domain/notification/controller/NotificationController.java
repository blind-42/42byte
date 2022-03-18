package com.blind.api.domain.notification.controller;

import com.blind.api.domain.notification.DTO.NotiDTO;
import com.blind.api.domain.notification.DTO.NotiResponseDTO;
import com.blind.api.domain.notification.domain.Noti;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface NotificationController {

    NotiResponseDTO getNoti(HttpServletRequest request);
    void delNoti(HttpServletRequest request, @RequestParam("id") Long id);
    void checkNoti(HttpServletRequest request, @RequestParam("id") Long id);
    }
