package com.csmaster.cs_master.dto.auth.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LoginRequest {

    private String email;
    private String password;
    private String provider;
    private String providerId;
}
