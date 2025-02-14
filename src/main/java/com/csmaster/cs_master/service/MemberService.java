package com.csmaster.cs_master.service;

import com.csmaster.cs_master.dto.member.request.SignUpRequest;
import com.csmaster.cs_master.dto.auth.response.LoginResponse;
import com.csmaster.cs_master.dto.member.response.InfoResponse;
import com.csmaster.cs_master.entity.Member;
import com.csmaster.cs_master.exception.CustomException;
import com.csmaster.cs_master.exception.domain.AuthExceptionInfo;
import com.csmaster.cs_master.exception.domain.MemberExceptionInfo;
import com.csmaster.cs_master.repository.MemberRepository;
import com.csmaster.cs_master.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final JwtTokenProvider tokenProvider;
    private final PasswordEncoder passwordEncoder;
    private final AuthService authService;

    @Transactional
    public Object signUp(SignUpRequest request) {
        if (request.getProvider() == null || request.getProvider().isBlank()) {
            return signUpGeneral(request);
        }

        return switch (request.getProvider().toLowerCase()) {
            case "kakao", "naver" -> signUpSocial(request);
            default -> throw new IllegalArgumentException("지원하지 않는 소셜 로그인 방식입니다: " + request.getProvider());
        };

    }

    private String signUpGeneral(SignUpRequest request) {

        // 일반 회원가입 로직
        checkEmail(request.getEmail());
        checkNickname(request.getNickname());

        Member member = Member.builder()
                .grade(request.getGrade())
                .name(request.getName())
                .nickname(request.getNickname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .studyPeriod(request.getStudyPeriod())
                .position(request.getPosition())
                .profileImage(request.getProfileImage())
                .build();

        memberRepository.save(member);

        return member.getEmail();
    }

    private LoginResponse signUpSocial(SignUpRequest request) {

        // 소셜 회원 로그인 한 경우, 기존 회원 정보 수정
        String provider = request.getProvider();
        String providerId = request.getProviderId();

        checkNickname(request.getNickname());

        Member member = memberRepository.findByProviderIdAndProvider(providerId, provider)
                .orElseThrow(() -> new RuntimeException("해당 소셜 계정이 존재하지 않습니다."));

        member.setName(request.getName());
        member.setNickname(request.getNickname());
        member.setPosition(request.getPosition());
        member.setProfileImage(request.getProfileImage());
        member.setStudyPeriod(request.getStudyPeriod());

        String accessToken = tokenProvider.generateAccessToken(member.getMemberId(), null);
        String refreshToken = tokenProvider.generateRefreshToken(member.getMemberId(), null);

        return new LoginResponse(accessToken, refreshToken, member.getEmail());

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

    public InfoResponse getInfo() {
        Long userId = authService.getCurrentMemberId();
        Member member = validateMember(userId);
        return InfoResponse.from(member);
    }

    private Member validateMember(Long id) {
        Optional<Member> existingMember = memberRepository.findById(id);
        if (existingMember.isPresent()) {
            return existingMember.get();
        }
        throw new CustomException(AuthExceptionInfo.MEMBER_NOT_FOUND_IN_TOKEN);
    }

}
