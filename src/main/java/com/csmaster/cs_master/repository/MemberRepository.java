package com.csmaster.cs_master.repository;

import com.csmaster.cs_master.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);

    Optional<Member> findByNickname(String nickname);

    @Query("SELECT m FROM Member m WHERE m.providerId = :providerId AND m.provider = :provider")
    Optional<Member> findByProviderIdAndProvider(@Param("providerId") String providerId, @Param("provider") String provider);

}
