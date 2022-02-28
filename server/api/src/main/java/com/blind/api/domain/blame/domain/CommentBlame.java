package com.blind.api.domain.blame.domain;

import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.global.entity.BaseTimeEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@NoArgsConstructor
@Entity
public class CommentBlame extends BaseTimeEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "comment_id", nullable = false)
    @ManyToOne
    private Comment comment;

    @JoinColumn(name = "user_id", nullable = false)
    @ManyToOne
    @JsonIgnore
    private User user;

    @Column(name = "reason", nullable = false)
    @NotNull
    private String reason;

    @Builder
    public CommentBlame(Comment comment, User user, String reason) {
        this.comment = comment;
        this.user = user;
        this.reason = reason;
    }
}
