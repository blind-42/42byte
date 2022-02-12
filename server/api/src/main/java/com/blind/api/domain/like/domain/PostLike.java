package com.blind.api.domain.like.domain;

import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.util.Assert;

import javax.persistence.*;
import javax.transaction.Transactional;

@Getter
@NoArgsConstructor
@Entity
public class PostLike {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "post_id", nullable = false)
    @ManyToOne
    private Post post;

    @JoinColumn(name = "user_id", nullable = false)
    @ManyToOne
    private User user;

    @Builder
    public PostLike(Post post, User user) {
        Assert.notNull(post, "postId must not be Null");
        Assert.notNull(user, "user must not be Null");
        this.post = post;
        this.user = user;
    }
}
