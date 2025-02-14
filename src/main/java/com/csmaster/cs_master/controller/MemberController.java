package com.csmaster.cs_master.controller;

import com.csmaster.cs_master.dto.member.request.SignUpRequest;
import com.csmaster.cs_master.service.MemberService;
import com.csmaster.cs_master.utils.ApiUtil;
import com.csmaster.cs_master.vo.Response;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/sign-up")
    public ResponseEntity<Response<Object>> signUp(@Valid @RequestBody SignUpRequest signUpRequest) {
        Object response  = memberService.signUp(signUpRequest);
        return ApiUtil.success(HttpStatus.CREATED, "회원가입 완료", response);
    }

    //이메일 중복 확인
    @GetMapping("/sign-up/check-email-duplication")
    public ResponseEntity<Response<Void>> checkEmail( @RequestParam(value = "email") String email) {
        memberService.checkEmail(email);
        return ApiUtil.success(HttpStatus.OK, email + " 이메일 중복되지 않습니다.", null);
    }

    //넥네임 중복 확인
    @GetMapping("/sign-up/check-nickname-duplication")
    public ResponseEntity<Response<Void>> checkNickname(@RequestParam(value = "nickname") String nickname) {
        memberService.checkNickname(nickname);
        return ApiUtil.success(HttpStatus.OK, nickname + " 닉네임 중복되지 않습니다.", null);
    }

}
