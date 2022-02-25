package com.blind.api.domain.security.jwt.v1.domain;

import com.blind.api.domain.user.v2.domain.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "USER_REFRESH_TOKEN")
public class Token {
    @JsonIgnore
    @Id
    @Column(name = "refresh_token_seq")
    @NotNull
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long refreshTokenSeq;

    @OneToOne
    @JoinColumn(name = "hash_id", referencedColumnName = "hash_id")
    private User user;

    @Column(name = "refresh_token", length = 256)
    @NotNull
    private String refreshToken;

    @Column(name = "access_token", length = 256)
    @NotNull
    private String accessToken;

    public Token(
            @NotNull User user,
            @NotNull String refreshToken,
            @NotNull String accessToken
    ) {
        this.user = user;
        this.refreshToken = refreshToken;
        this.accessToken = accessToken;
    }
}