package com.csmaster.cs_master.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;

@Component
public class JwtTokenProvider {
    private final Key key;
    private final long accessTokenExpiration;
    private final long refreshTokenExpiration;
    private final JwtDecoder jwtDecoder;

    public JwtTokenProvider(
            @Value("${jwt.secret}") String secret,
            @Value("${jwt.access-token-expiration}") Long accessTokenExpiration,
            @Value("${jwt.refresh-token-expiration}") Long refreshTokenExpiration
    ) {
        byte[] bytes = Decoders.BASE64.decode(secret);
        SecretKey key = Keys.hmacShaKeyFor(bytes);
        this.key = key;
        this.accessTokenExpiration = accessTokenExpiration;
        this.refreshTokenExpiration = refreshTokenExpiration;
        this.jwtDecoder = NimbusJwtDecoder.withSecretKey(key).build();
    }

    public String generateAccessToken(Long id, String role) {
        return generateToken(id, role, accessTokenExpiration);
    }

    public String generateRefreshToken(Long id, String role) {
        return generateToken(id, role, refreshTokenExpiration);
    }

    public boolean validateToken(String token) {
        try {
            jwtDecoder.decode(token);
            return true;
        } catch (JwtException e) {
            return false;
        }
    }

    public String getToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }

    public org.springframework.security.oauth2.jwt.Jwt parseToken(String token) {
        return jwtDecoder.decode(token);
    }

    private String generateToken(Long id, String role, long expiration) {

        HashMap<String, Object> claims = new HashMap<>();
        claims.put("id", id);
        if (role != null) claims.put("role", role);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }
}
