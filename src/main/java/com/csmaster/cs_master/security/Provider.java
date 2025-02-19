package com.csmaster.cs_master.security;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Provider {
    KAKAO("kakao"),
    NAVER("naver")
    ;

    private String provider;
}
