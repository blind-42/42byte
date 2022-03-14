package com.blind.api.web.management.handler;

import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.global.utils.ApplicationYmlRead;
import com.blind.api.global.utils.CookieUtil;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.lang.reflect.Method;
import java.util.Optional;

@Aspect
@Slf4j
@Component
@AllArgsConstructor
public class AdminAccessHandler {
    private final TokenService tokenService;
    private final ApplicationYmlRead applicationYmlRead;

    @Pointcut("execution(* *..ManagementController.*(..))")
    public void managementController(){}

    @Around("managementController()")
    public Object doCheckAdmin(ProceedingJoinPoint joinPoint) throws Throwable{
        /* 메서드 메타정보 가져오기 */
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        Object target = joinPoint.getTarget();
        Method method = signature.getMethod();
        Object[] args = joinPoint.getArgs();

        /* Request 정보 가져오기 */
        HttpServletRequest request  = ((ServletRequestAttributes)RequestContextHolder.currentRequestAttributes()).getRequest();
        HttpServletResponse response = ((ServletRequestAttributes)RequestContextHolder.currentRequestAttributes()).getResponse();

        HttpSession session = request.getSession();
        if (HeaderUtil.getAccessToken(request) != null) {
            /* 관리자 유저 확인
            findAdminByAccessToken에서 관리자가 아닌 경우 메인 페이지로 리다이렉트*/
                User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
                session.setAttribute("user", user);
        }
        else {
            String cookie = CookieUtil.getCookie(request, "refresh_token")
                    .map(Cookie::getValue)
                    .orElseThrow();
            User user = tokenService.findAdminByRefreshToken(cookie);
            session.setAttribute("user", user);
        }
        User sessionUser = (User)session.getAttribute("user");
        if (sessionUser == null) // || sessionUser.getRoleType() != RoleType.ADMIN)
            return redirect(response);
        return method.invoke(target,args);
    }

    private Object redirect(HttpServletResponse response) throws Throwable{
        /* response 클라이언트 대기 모드로 바꾸기 */
        String frontUrl = applicationYmlRead.getFrontUrl();
        response.sendRedirect(frontUrl);
        return frontUrl;
    }
}
