package com.blind.api.domain.user.domain;

import com.blind.api.domain.oauth.v2.domain.RoleType;
import com.blind.api.global.entity.BaseTimeEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Setter
@Getter
@NoArgsConstructor
@DynamicInsert
@Table(name = "USER_INFO")
public class User extends BaseTimeEntity {
    @JsonIgnore
    @Id
    @Column(name = "USER_SEQ")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userSeq;

    @NotNull
    @Column(name = "USER_ID", length = 64, unique = true)
    private String userId;

    @Size(max = 512)
    @Column(name = "PROFILE_IMAGE_URL", length = 512)
    @ColumnDefault("'1.jpg'")
    private String profileImageUrl;

    @NotNull
    @Enumerated(EnumType.STRING)
    private RoleType roleType;

    /*
    public User(
            @NotNull @Size(max = 256) String userId,
            @NotNull RoleType roleType
    ) {
        this.userId = userId;
        this.roleType = roleType;
    }*/

    public User(
            @NotNull @Size(max = 64) String userId,
            @NotNull RoleType roleType
    ) {
        this.userId = userId;
        this.roleType = roleType;
    }
}
