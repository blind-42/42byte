package com.blind.api.domain.security.oauth.v2.handler;

import com.blind.api.domain.security.oauth.v2.domain.LoginDelay;
import com.blind.api.global.exception.entity.ExceptionEntity;
import com.blind.api.global.utils.ClientUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.Map;
import java.util.concurrent.ConcurrentLinkedQueue;


@Aspect

@Slf4j
@Component
@EnableAspectJAutoProxy(proxyTargetClass = true)
public class LoginAccessHandler {
    private LoginDelay login;
    private final ConcurrentLinkedQueue<String> queue;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public LoginAccessHandler(LoginDelay login) {
        this.login = login;
        this.queue = new ConcurrentLinkedQueue<String>();
    }

    @Pointcut("execution(* *..AuthorizationRequestRepository.removeAuthorizationRequest(..))")
    public void OAuth2UserRequestEntityConverter(){}

    @Around("OAuth2UserRequestEntityConverter()")
    public Object doValidate(ProceedingJoinPoint joinPoint) throws Throwable{
        Object result = null;
        /* 메서드 메타정보 가져오기 */
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        Object target = joinPoint.getTarget();
        Method method = signature.getMethod();
        Object[] args = joinPoint.getArgs();

        /* Request, Response 파라미터 정보 가져오기 */
        HttpServletRequest request  = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        HttpServletResponse response = ((ServletRequestAttributes)RequestContextHolder.currentRequestAttributes()).getResponse();

        /* 예기치 못한 로직은 그대로 흘려보내기 */
        String uri = request.getRequestURI();
        if (uri == null || !uri.equals("/login/oauth2/code/42"))
            return method.invoke(target,args);

        /* 요청한 유저들을 IP를 통해 식별하기 */
        String ip = ClientUtil.getClientIP(request);
        if (queue.contains(ip)) {
            result = returnBadResponse(response);
        } else {
            queue.add(ip);
            Map<String, String[]> reqParamMap = request.getParameterMap();
            boolean isSuccess = reqParamMap.containsKey("code");
            result = isSuccess ? login.tryStart(method, target, args) : method.invoke(target,args);
            queue.remove(ip);
        }

        return result;
    }

    private Object returnBadResponse(HttpServletResponse response) throws Throwable{
        /* response 클라이언트 대기 모드로 바꾸기 */
        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        response.setHeader("content-type","application/json");
        response.setCharacterEncoding("utf-8");
        ExceptionEntity exception = new ExceptionEntity("E0001", "...");
        String result = objectMapper.writeValueAsString(exception);
        response.getOutputStream().print(result);
        return null;
    }
}
