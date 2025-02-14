package com.csmaster.cs_master.dto.auth.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Deprecated
public class SocialLoginResponse {

    private String providerId;
    private String email;
    private Boolean isRegistered;
}
