package com.csmaster.cs_master.exception.domain;

import com.csmaster.cs_master.exception.ExceptionInfo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum AuthExceptionInfo implements ExceptionInfo {
    ALREADY_SIGN_UP_KAKAO(HttpStatus.CONFLICT, "이미 카카오로 회원가입 되어 있으나, 추가 정보 입력이 되어 있지 않습니다.");

    private HttpStatus status;
    private String message;
}
