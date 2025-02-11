package com.csmaster.cs_master.controller;

import com.csmaster.cs_master.dto.auth.SocialLoginResponse;
import com.csmaster.cs_master.service.AuthService;
import com.csmaster.cs_master.utils.ApiUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {
    @Value("${kakao.REST_API_KEY}")
    private String kakaoRestAPiKey;
    @Value("${kakao.REDIRECT_URI}")
    private String kakaoRedirectURI;

    private final AuthService authService;

    @GetMapping("/kakao")
    public ResponseEntity getKakaoCodeAndRedirect() {
        String data ="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id="+kakaoRestAPiKey+"&redirect_uri="+ kakaoRedirectURI;
        return ApiUtil.success(HttpStatus.OK, "카카오 연결 페이지 전달", data);
    }

    @GetMapping("/kakao/token")
    public ResponseEntity getKakaoToken(@RequestParam(value = "code") String code) {

        SocialLoginResponse socialLoginResponse = authService.kakaoLogin(code);
        return ApiUtil.success(HttpStatus.OK, "카카오 토큰 발급 및 정보 가져오기 성공", socialLoginResponse);
    }
}
