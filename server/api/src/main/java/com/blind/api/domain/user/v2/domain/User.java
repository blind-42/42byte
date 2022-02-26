package com.blind.api.domain.user.v2.domain;

import com.blind.api.global.entity.BaseTimeEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Setter
@Getter
@NoArgsConstructor
@DynamicInsert
@Table(name = "USER_INFO")
public class User extends BaseTimeEntity implements Serializable {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "hash_id", length = 64, unique = true)
    private String hashId;

    @Column(name = "PROFILE_IMAGE_URL", length = 512)
    @ColumnDefault("'1.jpg'")
    private String profileImageUrl;

    @NotNull
    @Enumerated(EnumType.STRING)
    private RoleType roleType;

    public User(
            @NotNull String hashId,
            @NotNull RoleType roleType
    ) {
        this.hashId = hashId;
        this.roleType = roleType;
    }
}
