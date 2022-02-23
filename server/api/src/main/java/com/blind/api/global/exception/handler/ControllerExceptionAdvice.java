package com.blind.api.global.exception.handler;

import com.blind.api.global.exception.entity.ExceptionEntity;
import com.blind.api.global.exception.entity.ExceptionCode;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.MessageSource;
import org.springframework.core.annotation.Order;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Configuration;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.Locale;
import java.util.NoSuchElementException;
import java.util.Set;

@Slf4j
@RestControllerAdvice
@AllArgsConstructor
public class ControllerExceptionAdvice {
    private final MessageSource messageSource;
    //@ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ExceptionEntity> exceptionHandler(HttpServletRequest request, RuntimeException e) {
        if (e instanceof NoSuchElementException)
            return ResponseEntity.status(400).body(ExceptionEntity.builder()
                    .code(ExceptionCode.ENTITY_NOT_FOUND.getCode())
                    .message(ExceptionCode.ENTITY_NOT_FOUND.getMessage()).build());
              /*  .status(e.getError().getStatus())
                .body(ApiExceptionEntity.builder()
                        .errorCode(e.getError().getCode())
                        .errorMessage(e.getError().getMessage())
                        .build());*/
        log.info(e.getMessage());
        return null;
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionEntity> exceptionHandler(MethodArgumentNotValidException ex) {
        BindingResult bindingResult = ex.getBindingResult();
        String message = bindingResult.getFieldError().getDefaultMessage();
        log.info(message);
        return getResponseEntity(message);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<ExceptionEntity> exceptionHandler(ConstraintViolationException ex) {
        Set<ConstraintViolation<?>> constraintViolations = ex.getConstraintViolations();

        for (ConstraintViolation<?> violation : ex.getConstraintViolations()) {
            String message = messageSource.getMessage(filter(violation.getMessage()), null, Locale.KOREA);
            return getResponseEntity(message);
        }
        return null;
    }

    private ResponseEntity<ExceptionEntity> getResponseEntity(String message){
        return ResponseEntity.status(400).body(ExceptionEntity.builder()
                .code(ExceptionCode.ENTITY_NOT_FOUND.getCode())
                .message(message)
                .build());
    }

    private String filter(String message){
        message = message.replace("{", "");
        message = message.replace("}", "");
        return message;

    }
}
