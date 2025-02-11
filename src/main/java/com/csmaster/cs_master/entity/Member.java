package com.csmaster.cs_master.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;

@Entity
@Table(name = "members")
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    private String name;// 일반 회원은 필수, 소셜 로그인은 필수 x

    @Column( nullable = false)
    private int grade;

    @Column(length = 20)// 일반 회원은 필수, 소셜 로그인은 필수 x
    private String nickname;

    @Column( length=120) // 일반 회원은 필수, 소셜 로그인은 필수 x
    private String email;

    // 일반 회원은 필수, 소셜 로그인은 필수 x
    private String password;

    private int studyPeriod;

    @Column(length=20)
    private String position;

    @Column(name = "url")
    private String profileImage;

    @CreationTimestamp
    private Instant createdAt;

    @UpdateTimestamp
    private Instant updatedAt;

    private Boolean isDeleted;

    private String provider;   // "KAKAO" "NAVER"(일반 회원가입은 NULL)
    private String providerId; // 소셜 로그인 시 해당 플랫폼에서 제공하는 사용자 고유 ID


}
