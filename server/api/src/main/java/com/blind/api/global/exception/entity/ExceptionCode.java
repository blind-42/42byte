package com.blind.api.global.exception.entity;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ExceptionCode {
    RUNTIME(HttpStatus.BAD_REQUEST, "E0001"),
    ACCESS_DENIED(HttpStatus.UNAUTHORIZED, "E0002"),
    INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "E0003"),

    /* 잘못된 타입 입력 */
    ENTITY_NOT_FOUND(HttpStatus.BAD_REQUEST, "E1000", "잘못된 입력입니다."),


    SECURITY_01(HttpStatus.UNAUTHORIZED, "S0001", "권한이 없습니다.");

    private final HttpStatus status;
    private final String code;
    private String message;

    ExceptionCode(HttpStatus status, String code) {
        this.status = status;
        this.code = code;
    }

    ExceptionCode(HttpStatus status, String code, String message) {
        this.status = status;
        this.code = code;
        this.message = message;
    }
}
