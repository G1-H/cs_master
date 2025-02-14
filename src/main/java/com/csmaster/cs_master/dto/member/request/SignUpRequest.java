package com.csmaster.cs_master.dto.member.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SignUpRequest {

    @NotNull
    private String name;

    @NotNull
    private Integer grade;

    @NotNull
    @Size(max = 20, message = "닉네임은 20자를 초과할 수 없습니다.")
    private String nickname;

    @NotNull
    @Email(message = "올바른 이메일 형식이 아닙니다.")
    private String email;

    @Pattern(
            regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$",
            message = "비밀번호는 최소 8자 이상이며, 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다."
    )
    private String password;

    private int studyPeriod;
    private String position;
    private String profileImage;
    private String provider;
    private String providerId;

}
