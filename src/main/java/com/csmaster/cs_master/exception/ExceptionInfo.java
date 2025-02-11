package com.csmaster.cs_master.exception;

import org.springframework.http.HttpStatus;

public interface ExceptionInfo {
    HttpStatus getStatus();
    String getMessage();
}
