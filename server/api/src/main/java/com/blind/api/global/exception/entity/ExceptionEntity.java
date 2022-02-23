package com.blind.api.global.exception.entity;

import lombok.Builder;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class ExceptionEntity {
    private String code;
    private String message;

    @Builder
    public ExceptionEntity(HttpStatus status, String code, String message){
        this.code = code;
        this.message = message;
    }
}
