package com.csmaster.cs_master.exception.domain;

import com.csmaster.cs_master.exception.ExceptionInfo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum AuthExceptionInfo implements ExceptionInfo {
    ALREADY_SIGN_UP_KAKAO(HttpStatus.FORBIDDEN, "이미 카카오로 회원가입 되어 있으나, 추가 정보 입력이 되어 있지 않습니다."),
    INVALID_GENERAL_MEMBER(HttpStatus.BAD_REQUEST, "이메일 또는 비밀번호가 일치 하지 않습니다."),
    INVALID_SOCIAL_MEMBER(HttpStatus.BAD_REQUEST, "잘못된 소셜 로그인 회원 요청입니다."),
    INVALID_SOCIAL_PROVIDER(HttpStatus.BAD_REQUEST, "지원하지 않는 소셜 로그인 방식입니다."),
    ;

    private HttpStatus status;
    private String message;
}
