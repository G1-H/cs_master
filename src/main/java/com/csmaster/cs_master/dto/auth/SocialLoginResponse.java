package com.csmaster.cs_master.dto.auth;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class SocialLoginResponse {

    private String socialID;
    private String email;

    public SocialLoginResponse(String socialID, String email) {
        this.socialID = socialID;
        this.email = email;
    }
}
