package com.csmaster.cs_master.exception.domain;

import com.csmaster.cs_master.dto.auth.response.SocialLoginResponse;
import com.csmaster.cs_master.exception.CustomException;
import com.csmaster.cs_master.exception.ExceptionInfo;
import lombok.Getter;

@Getter
@Deprecated
public class SocialLoginException extends CustomException {

    private SocialLoginResponse socialLoginResponse;

    public SocialLoginException(ExceptionInfo exceptionInfo, SocialLoginResponse socialLoginResponse) {
        super(exceptionInfo);
        this.socialLoginResponse = socialLoginResponse;
    }
}
