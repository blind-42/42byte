package com.blind.api.domain.like.domain;

import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.user.v2.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.util.Assert;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class CommentLike {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "comment_id", nullable = false)
    @ManyToOne
    private Comment comment;

    @JoinColumn(name = "user_id", nullable = false)
    @ManyToOne
    private User user;

    @Builder
    public CommentLike(Comment comment, User user) {
        Assert.notNull(comment, "commentId must not be Null");
        Assert.notNull(user, "user must not be Null");
        this.comment = comment;
        this.user = user;
    }
}
