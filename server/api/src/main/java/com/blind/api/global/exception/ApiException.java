package com.blind.api.global.exception;

import com.blind.api.global.exception.entity.ExceptionCode;
import lombok.Getter;

@Getter
public class ApiException extends RuntimeException {
    private ExceptionCode error;

    public ApiException (ExceptionCode e){
        super(e.getMessage());
        this.error = e;
    }
}
