package com.blind.api.global.Trace.aspect;

import com.blind.api.global.Trace.domain.TraceStatus;
import com.blind.api.global.Trace.service.LogTrace;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Slf4j
@Aspect
@AllArgsConstructor
@Component
public class TraceAspect {
    private final LogTrace logTrace;

    @Pointcut("execution(* com.blind.api.domain..*(..))")
    public void allDomain(){}

    @Pointcut("execution(* com.blind.api.domain.security..*(..))")
    public void securityDomain(){}

    @Around("allDomain() && !securityDomain()")
    public Object doLog(ProceedingJoinPoint joinPoint) throws Throwable{
        TraceStatus status = null;
        MethodSignature method = (MethodSignature)joinPoint.getSignature();
        try{
            status = logTrace.begin(method.getDeclaringType().getSimpleName() + "." + method.getName() + "()");
            Object result = joinPoint.proceed();
            logTrace.end(status);
            return result;
        } catch (Exception e) {
            logTrace.exception(status, e);
            throw e;
        }
    }
}
