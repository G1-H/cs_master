package com.csmaster.cs_master.security;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Role {
    MEMBER("member"),
    ADMIN("admin"),
    ;

    private String role;
}
