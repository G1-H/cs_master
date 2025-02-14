package com.csmaster.cs_master.dto.member.response;

import com.csmaster.cs_master.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Builder
public class InfoResponse {
    private String name;
    private int grade;
    private String nickname;
    private String email;
    private int studyPeriod;
    private String position;
    private String profileImage;
    private String provider;

    public static InfoResponse from(Member member) {
        return InfoResponse.builder()
                .name(member.getName())
                .grade(member.getGrade())
                .nickname(member.getNickname())
                .email(member.getEmail())
                .studyPeriod(member.getStudyPeriod())
                .position(member.getPosition())
                .profileImage(member.getProfileImage())
                .provider(member.getProvider())
                .build();
    }

}
