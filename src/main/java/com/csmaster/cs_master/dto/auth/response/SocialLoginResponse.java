package com.csmaster.cs_master.dto.auth.response;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class SocialLoginResponse {

    private String providerId;
    private String email;
    private Boolean isRegistered;

    public SocialLoginResponse(String providerId, String email, Boolean isRegistered) {
        this.providerId = providerId;
        this.email = email;
        this.isRegistered = isRegistered;
    }
}
