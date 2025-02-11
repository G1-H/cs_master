package com.csmaster.cs_master.advice;

import com.csmaster.cs_master.exception.CustomException;
import com.csmaster.cs_master.utils.ApiUtil;
import com.csmaster.cs_master.vo.Response;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    //요청 형식 오류 발생 시 (spring validation Exception)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Response<Map<String, String>>> handleValidationExceptions(MethodArgumentNotValidException e) {
        Map<String, String> errors = new HashMap<>();
        e.getBindingResult().getFieldErrors().forEach(error ->
            errors.put(error.getField(), error.getDefaultMessage())
        );
        log.error("\u001B[31mcode: " + HttpStatus.BAD_REQUEST.value() + "\u001B[0m");
        log.error("\u001B[31mmessage: " + e.getMessage() + "\u001B[0m");
        return ApiUtil.fail(HttpStatus.BAD_REQUEST, "잘못된 요청입니다.", errors);
    }

    @ExceptionHandler(CustomException.class)
    public  ResponseEntity<Response<Object>> handleCustomException(CustomException e) {
        log.error("\u001B[31mcode: "+e.getErrorStatus().value()+"\u001B[0m");
        log.error("\u001B[31mmessage: "+ e.getErrorMessage()+"\u001B[0m");
        return ApiUtil.fail(e.getErrorStatus(), e.getErrorMessage(), null);
    }


//
//    @ExceptionHandler(RuntimeException.class)
//    public ResponseEntity<Response<Object>> handleRuntimeException(RuntimeException e) {
//        log.error("\u001B[31mcode: "+ HttpStatus.INTERNAL_SERVER_ERROR.value() +"\u001B[0m");
//        log.error("\u001B[31mmessage: "+ e.getMessage()+"\u001B[0m");
//        return ApiUtil.fail(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), null);
//    }



}
