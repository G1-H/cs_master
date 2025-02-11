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

    @Column( nullable = false)
    private String name;

    @Column( nullable = false)
    private int grade;

    @Column(length = 20, nullable = false)
    private String nickname;

    @Column(nullable = false, length=120)
    private String email;

    @Column( nullable = false)
    private String password;

    @Column
    private int studyPeriod;

    @Column(length=20)
    private String position;

    @Column(name = "url")
    private String profileImage;

    @CreationTimestamp
    @Column
    private Instant createdAt;

    @UpdateTimestamp
    @Column
    private Instant updatedAt;

    @Column
    private Boolean isDeleted;


}
