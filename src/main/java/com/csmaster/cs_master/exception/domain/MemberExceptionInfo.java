package com.csmaster.cs_master.exception.domain;

import com.csmaster.cs_master.exception.ExceptionInfo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum MemberExceptionInfo implements ExceptionInfo {
    DUPLICATE_EMAIL(HttpStatus.CONFLICT, "이메일이 중복됩니다."),
    DUPLICATE_NICKNAME(HttpStatus.CONFLICT, "닉네임이 중복됩니다.");

    private HttpStatus status;
    private String message;
}
