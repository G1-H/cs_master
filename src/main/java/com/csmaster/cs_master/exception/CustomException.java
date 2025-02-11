package com.csmaster.cs_master.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class CustomException extends RuntimeException{
    private HttpStatus errorStatus;
    private String errorMessage;

    public CustomException(ExceptionInfo exceptionInfo) {
        this.errorStatus = exceptionInfo.getStatus();
        this.errorMessage = exceptionInfo.getMessage();
    }
}
