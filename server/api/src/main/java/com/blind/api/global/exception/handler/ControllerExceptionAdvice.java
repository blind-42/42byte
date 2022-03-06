package com.blind.api.global.exception.handler;

import com.blind.api.global.exception.AccessException;
import com.blind.api.global.exception.BusinessException;
import com.blind.api.global.exception.entity.ExceptionReponse;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Locale;

@Slf4j
@RestControllerAdvice
@AllArgsConstructor
public class ControllerExceptionAdvice {
    private final MessageSource messageSource;

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<ExceptionReponse> constraintViolationExceptionHandle(ConstraintViolationException ex) {
        log.info("ConstraintViolationException", ex);
        for (ConstraintViolation<?> violation : ex.getConstraintViolations()) {
            String message = messageSource.getMessage(filter(violation.getMessage()), null, Locale.KOREA);
            ExceptionReponse response = ExceptionReponse.from("E0001", message);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
        return null;
    }

    /**
     * enum type 일치하지 않아 binding 못할 경우 발생
     * 주로 @RequestParam enum으로 binding 못했을 경우 발생
     */
    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    protected ResponseEntity<ExceptionReponse> methodArgumentTypeMismatchExceptionHandle(MethodArgumentTypeMismatchException ex) {
        log.error("MethodArgumentTypeMismatchException", ex);
        ExceptionReponse response = ExceptionReponse.from("E0001", "잘못된 요청입니다");
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    /**
     *  javax.validation.Valid or @Validated 으로 binding error 발생시 발생한다.
     *  HttpMessageConverter 에서 등록한 HttpMessageConverter binding 못할경우 발생
     *  주로 @RequestBody, @RequestPart 어노테이션에서 발생
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    protected ResponseEntity<ExceptionReponse> methodArgumentNotValidExceptionHandle(MethodArgumentNotValidException ex) {
        log.info("MethodArgumentNotValidException", ex);
        ExceptionReponse response = ExceptionReponse.from("E0001", ex);
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    /**
     * 지원하지 않은 HTTP method 호출 할 경우 발생
     */
    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    protected ResponseEntity<ExceptionReponse> httpRequestMethodNotSupportedExceptionHandle(HttpRequestMethodNotSupportedException ex) {
        log.error("HttpRequestMethodNotSupportedException", ex);
        ExceptionReponse response = ExceptionReponse.from("405");
        return new ResponseEntity<>(response, HttpStatus.METHOD_NOT_ALLOWED);
    }

    @ExceptionHandler(BindException.class)
    protected ResponseEntity<ExceptionReponse> bindExceptionHandle(BindException ex) {
        log.error("BindException", ex);
        ExceptionReponse response = ExceptionReponse.from("E0001", ex.getBindingResult());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(BusinessException.class)
    protected ResponseEntity<ExceptionReponse> httpRequestMethodNotSupportedExceptionHandle(BusinessException ex) {
        log.error("BusinessException", ex);
        String message = messageSource.getMessage(filter(ex.getMessage()), null, Locale.KOREA);
        ExceptionReponse response = ExceptionReponse.from("E0001", message);
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(AccessException.class)
    protected ResponseEntity<Object> customAccessExceptionHandle(AccessException ex) throws URISyntaxException {
        URI redirectUri = new URI(ex.getRedirectUrl());
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setLocation(redirectUri);
        return new ResponseEntity<>(httpHeaders, HttpStatus.SEE_OTHER);
    }

    private String filter(String message){
        message = message.replace("{", "");
        message = message.replace("}", "");
        return message;
    }
}
