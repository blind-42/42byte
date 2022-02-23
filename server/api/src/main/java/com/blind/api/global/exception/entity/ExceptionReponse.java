package com.blind.api.global.exception.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

@Setter
@Getter
public class ExceptionReponse {
    private String code;
    private String message;

    public static ExceptionReponse from(String code, BindingResult bindingResult){
        FieldError fieldError = bindingResult.getFieldError();
        return ExceptionReponse.builder()
                .code(code)
                .message(fieldError.getDefaultMessage())
                .build();
    }

    public static ExceptionReponse from(String code, MethodArgumentTypeMismatchException ex){
        return ExceptionReponse.builder()
                .code(code)
                .message(ex.getMessage())
                .build();
    }

    public static ExceptionReponse from(String code){
        return ExceptionReponse.builder()
                .code(code)
                .message(HttpStatus.METHOD_NOT_ALLOWED.toString())
                .build();
    }

    public static ExceptionReponse from(String code, String Message){
        return ExceptionReponse.builder()
                .code(code)
                .message(Message)
                .build();
    }
    @Builder
    private ExceptionReponse(String code, String message){
        this.code = code;
        this.message = message;
    }
}
