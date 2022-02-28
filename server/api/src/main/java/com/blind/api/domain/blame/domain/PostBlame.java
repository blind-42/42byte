package com.blind.api.domain.blame.domain;

import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.global.entity.BaseTimeEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.util.Assert;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@NoArgsConstructor
@Entity
public class PostBlame extends BaseTimeEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "post_id", nullable = false)
    @ManyToOne
    private Post post;

    @JoinColumn(name = "user_id", nullable = false)
    @ManyToOne
    @JsonIgnore
    private User user;

    @Column(name = "reason", nullable = false)
    @NotNull
    private String reason;

    @Builder
    public PostBlame(Post post, User user, String reason) {
        this.post = post;
        this.user = user;
        this.reason = reason;
    }
}
