package com.csmaster.cs_master.utils;

import com.csmaster.cs_master.vo.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ApiUtil {
    // 응답 성공 api
    public static <T> ResponseEntity<Response<T>> success(Integer status, String message, T data) {
        return ResponseEntity.status(status).body(new Response(true, message, data));
    }
    // 응답 성공 api
   public static <T> ResponseEntity<Response<T>> success(HttpStatus status, String message, T data) {
       return ResponseEntity.status(status).body(new Response<>(true, message, data));
    }

    // 응답 실패 api
    public static <T> ResponseEntity<Response<T>> fail(Integer status, String message, T data) {
        return ResponseEntity.status(status).body(new Response(false, message, data));
    }

    // 응답 실패 api
    public static <T> ResponseEntity<Response<T>> fail(HttpStatus status, String message, T data) {
        return ResponseEntity.status(status).body(new Response<>(false, message, data));
    }

}
