package com.blind.api.domain.post.v1.domain.entity;

import com.blind.api.domain.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Likes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "postIdx")
    @ManyToOne
    private PostEntity post;

    @JoinColumn(name = "userSeq")
    @ManyToOne
    private User user;

    @Column(name = "type")
    private Integer type;

    @Builder
    public Likes(Long id, PostEntity post, User user, Integer type) {
        this.id = id;
        this.post = post;
        this.user = user;
        this.type = type;
    }
}
