package com.csmaster.cs_master.controller;

import com.csmaster.cs_master.dto.auth.request.LoginRequest;
import com.csmaster.cs_master.dto.auth.response.LoginResponse;
import com.csmaster.cs_master.service.AuthService;
import com.csmaster.cs_master.utils.ApiUtil;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    @GetMapping("/kakao")
    public ResponseEntity kakaoLogin() {
        String uri = authService.getKakaoCodeAndRedirect();
        return ApiUtil.success(HttpStatus.OK, "카카오 연결 페이지 전달", uri);
    }

    @GetMapping("/kakao/token")
    public void getKakaoToken(@RequestParam(value = "code") String code, HttpServletResponse response)
            throws IOException {
        String redirectUrl = authService.kakaoLogin(code);
        response.sendRedirect(redirectUrl);
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequest loginRequest) {
        LoginResponse loginResponse=authService.login(loginRequest);
        return ApiUtil.success(HttpStatus.OK, "로그인 성공", loginResponse);
    }
}
