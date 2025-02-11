package com.csmaster.cs_master.service;

import com.csmaster.cs_master.dto.auth.SocialLoginResponse;
import com.csmaster.cs_master.entity.Member;
import com.csmaster.cs_master.exception.CustomException;
import com.csmaster.cs_master.exception.domain.AuthExceptionInfo;
import com.csmaster.cs_master.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.*;

@Service
@RequiredArgsConstructor
public class AuthService {
    @Value("${kakao.REST_API_KEY}")
    private String kakaoRestAPiKey;
    @Value("${kakao.REDIRECT_URI}")
    private String kakakRedirectURI;

    private final MemberService memberService;
    private final MemberRepository memberRepository;

    @Transactional
    public SocialLoginResponse kakaoLogin(String code) {

        String accessToken = getAccessToken(code, kakaoRestAPiKey, kakakRedirectURI);

        Map<String, Object> userInfo = getUserInfoWithAccessToken(accessToken);

        String userKakaoID = String.valueOf(userInfo.get("id"));

        Map<String, Object> kakaoAccount = (Map<String, Object>) userInfo.get("kakao_account");
        String email = (String) kakaoAccount.get("email");

        Optional<Member> existingMember = memberRepository.findByProviderIdAndProvider(userKakaoID, "kakao");
        if (existingMember.isPresent()) {
            Member member = existingMember.get();
            if (member.getCreatedAt().equals(member.getUpdatedAt())) {
                throw new CustomException(AuthExceptionInfo.ALREADY_SIGN_UP_KAKAO);
            }
            return new SocialLoginResponse(userKakaoID, email);
        }


        memberService.checkEmail(email);
        Member newMember = Member.builder()
                .email(email)
                .provider("kakao")
                .providerId(userKakaoID)
                .build();
        memberRepository.save(newMember);

        return new SocialLoginResponse(userKakaoID, email);
    }

    private String getAccessToken(String code, String clientID, String redirectURI) {
        WebClient webClient = WebClient.create("https://kauth.kakao.com");
        Mono<Map> responseMono = webClient.post()
                .uri("/oauth/token")
                .header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8")
                .bodyValue("grant_type=authorization_code" +
                        "&client_id=" + clientID +
                        "&redirect_uri=" + redirectURI +
                        "&code=" + code)
                .retrieve()
                .bodyToMono(Map.class);

        Map response = responseMono.block();

        return (String) response.get("access_token");
    }

    private Map<String, Object> getUserInfoWithAccessToken(String accessToken) {
        WebClient webClient = WebClient.create("https://kapi.kakao.com");
        Mono<Map> responseUserInfoMono = webClient.post()
                .uri("/v2/user/me")
                .header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8")
                .header("Authorization", "Bearer " + accessToken)
                .bodyValue("property_keys=[\"kakao_account.email\"]")
                .retrieve()
                .bodyToMono(Map.class);

        Map<String, Object> userInfo = responseUserInfoMono.block();

        return userInfo;
    }

}
