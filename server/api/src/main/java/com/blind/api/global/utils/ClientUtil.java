package com.blind.api.global.utils;

import lombok.extern.slf4j.Slf4j;

import javax.servlet.http.HttpServletRequest;

@Slf4j
public class ClientUtil {
    public static String getClientIP(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        //log.info("> X-FORWARDED-FOR : " + ip);
        if (ip == null) {
            ip = request.getHeader("Proxy-Client-IP");
            //log.info("> Proxy-Client-IP : " + ip);
        }
        if (ip == null) {
            ip = request.getHeader("WL-Proxy-Client-IP");
            //log.info(">  WL-Proxy-Client-IP : " + ip);
        }
        if (ip == null) {
            ip = request.getHeader("HTTP_CLIENT_IP");
            ///log.info("> HTTP_CLIENT_IP : " + ip);
        }
        if (ip == null) {
            ip = request.getHeader("HTTP_X_FORWARDED_FOR");
            //log.info("> HTTP_X_FORWARDED_FOR : " + ip);
        }
        if (ip == null) {
            ip = request.getRemoteAddr();
            //log.info("> getRemoteAddr : "+ip);
        }
        //log.info("> Result : IP Address : "+ip);
        return ip;
    }
}
