package com.csmaster.cs_master.service;

import com.csmaster.cs_master.dto.auth.request.LoginRequest;
import com.csmaster.cs_master.dto.auth.response.LoginResponse;
import com.csmaster.cs_master.entity.Member;
import com.csmaster.cs_master.exception.CustomException;
import com.csmaster.cs_master.exception.domain.AuthExceptionInfo;
import com.csmaster.cs_master.exception.domain.MemberExceptionInfo;
import com.csmaster.cs_master.repository.MemberRepository;
import com.csmaster.cs_master.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
    @Value("${kakao.REST_API_KEY}")
    private String kakaoRestAPiKey;
    @Value("${kakao.REDIRECT_URI}")
    private String kakaoRedirectURI;

    private final MemberRepository memberRepository;
    private final JwtTokenProvider tokenProvider;
    private final PasswordEncoder passwordEncoder;

    public String getKakaoCodeAndRedirect() {
        return "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id="+kakaoRestAPiKey+"&redirect_uri="+ kakaoRedirectURI;
    }

    @Transactional
    public String kakaoLogin(String code) {

        String accessToken = getKakaoAccessToken(code, kakaoRestAPiKey, kakaoRedirectURI);

        Map<String, Object> userInfo = getUserInfoWithKakaoAccessToken(accessToken);

        String userKakaoId = String.valueOf(userInfo.get("id"));

        Map<String, Object> kakaoAccount = (Map<String, Object>) userInfo.get("kakao_account");
        String email = (String) kakaoAccount.get("email");

        boolean isRegistered = false;

        Optional<Member> existingMember = memberRepository.findByProviderIdAndProvider(userKakaoId, "kakao");
        if (existingMember.isPresent()) {
            Member member = existingMember.get();
            if (!member.getCreatedAt().equals(member.getUpdatedAt())) {
                isRegistered= true;
                return "http://localhost:3000/auth/callback"
                        + "?provider_id=" + member.getProviderId()
                        + "&email=" + member.getEmail()
                        + "&is_registered=" + isRegistered;
            }
            return "http://localhost:3000/auth/callback"
                    + "?provider_id=" + member.getProviderId()
                    + "&email=" + member.getEmail()
                    + "&is_registered=" + isRegistered;
        }


        if (memberRepository.findByEmail(email).isPresent()) {
            throw new CustomException(MemberExceptionInfo.DUPLICATE_EMAIL);
        }
        Member newMember = Member.builder()
                .email(email)
                .provider("kakao")
                .providerId(userKakaoId)
                .build();
        memberRepository.save(newMember);

        return "http://localhost:3000/auth/callback"
                + "?provider_id=" + newMember.getProviderId()
                + "&email=" + newMember.getEmail()
                + "&is_registered=" + isRegistered;
    }

    public LoginResponse login(LoginRequest request) {
        if (request.getProvider() == null || request.getProvider().isBlank()) {
            return loginGeneral(request);
        }

        return switch (request.getProvider().toLowerCase()) {
            
            case "kakao", "naver" -> loginSocial(request);
            default -> throw new CustomException(AuthExceptionInfo.INVALID_SOCIAL_PROVIDER);
        };

    }

    public Long getCurrentMemberId() {
        JwtAuthenticationToken authentication = (JwtAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();
        return  (Long) authentication.getTokenAttributes().get("id");
    }

    private LoginResponse loginGeneral(LoginRequest request) {
        String email = request.getEmail();
        String password = request.getPassword();
        Optional<Member> existingMember = memberRepository.findByEmail(email);
        if (existingMember.isPresent()) {
            Member member = existingMember.get();
            if (passwordEncoder.matches(password,member.getPassword())) {
                String accessToken = tokenProvider.generateAccessToken(member.getMemberId(), null);
                String refreshToken = tokenProvider.generateRefreshToken(member.getMemberId(), null);
                return new LoginResponse(accessToken, refreshToken, member.getEmail());
            }
        }
        throw new CustomException(AuthExceptionInfo.INVALID_GENERAL_MEMBER);

    }

    private LoginResponse loginSocial(LoginRequest request) {
        String provider = request.getProvider();
        String providerId = request.getProviderId();
        Optional<Member> existingMember = memberRepository.findByProviderIdAndProvider(providerId, provider);
        if (existingMember.isPresent()) {
            Member member = existingMember.get();
            String accessToken = tokenProvider.generateAccessToken(member.getMemberId(), null);
            String refreshToken = tokenProvider.generateRefreshToken(member.getMemberId(), null);
            return new LoginResponse(accessToken, refreshToken, member.getEmail());
        }
        throw new CustomException(AuthExceptionInfo.INVALID_SOCIAL_MEMBER);
    }

    private String getKakaoAccessToken(String code, String clientID, String redirectURI) {
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

    private Map<String, Object> getUserInfoWithKakaoAccessToken(String accessToken) {
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
