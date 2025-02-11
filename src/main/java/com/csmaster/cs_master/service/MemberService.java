package com.csmaster.cs_master.service;

import com.csmaster.cs_master.dto.member.SignUpRequest;
import com.csmaster.cs_master.entity.Member;
import com.csmaster.cs_master.exception.CustomException;
import com.csmaster.cs_master.exception.domain.MemberExceptionInfo;
import com.csmaster.cs_master.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public String signUp(SignUpRequest request) {

        checkEmail(request.getEmail());
        checkNickname(request.getNickname());

        // 중복 없으면 회원 등록 데이터베이스 저장
        Member member = Member.builder()
                .grade(request.getGrade())
                .name(request.getName())
                .nickname(request.getNickname())
                .email(request.getEmail())
                .password(request.getPassword())
                .studyPeriod(request.getStudyPeriod())
                .position(request.getPosition())
                .profileImage(request.getProfileImage())
                .build();

        memberRepository.save(member);

        return member.getEmail();
    }

    // 이메일 중복 확인
    public void checkEmail(String email) {
        if (memberRepository.findByEmail(email).isPresent()) {
            throw new CustomException(MemberExceptionInfo.DUPLICATE_EMAIL);
        }
    }

    //닉네임 중복 확인
    public void checkNickname(String nickname) {
        if (memberRepository.findByNickname(nickname).isPresent()) {
            throw new CustomException(MemberExceptionInfo.DUPLICATE_NICKNAME);
        }
    }

}
