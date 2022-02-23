package com.blind.api.global.validate;

import lombok.AllArgsConstructor;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.validation.executable.ExecutableValidator;
import java.lang.reflect.Method;
import java.util.Set;

@Aspect
@AllArgsConstructor
@Component
public class ValidateAspect {
    private final ExecutableValidator validator;

    @Pointcut("execution(* com.blind.api.domain..*ControllerImpl.*(..))")
    public void allController(){}

    @Around("allController()")
    public Object doValidate(ProceedingJoinPoint joinPoint) throws Throwable{
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();

        Object target = joinPoint.getTarget();
        Method method = signature.getMethod();
        Object[] args = joinPoint.getArgs();

        Set<ConstraintViolation<Object>> violations = validator.validateParameters(target, method, args);
        if (!violations.isEmpty()) {
            throw new ConstraintViolationException(violations);
        }

        // 실제 실행할 메서드
        return method.invoke(target, args);
    }
}
