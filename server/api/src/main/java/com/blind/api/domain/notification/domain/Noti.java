package com.blind.api.domain.notification.domain;

import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.global.entity.BaseTimeEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@DynamicInsert
public class Noti extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @JoinColumn(name = "user_id")
    @JsonIgnore
    @ManyToOne
    private User user;

    @JoinColumn(name = "post_id")
    @ManyToOne
    private Post post;

    @Column(name = "content_type")
    private String contentType;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    @Column(name = "count")
    private Long count;

    @Column(name = "is_checked")
    private Boolean isChecked;

    @Builder
    public Noti(User user, Post post, String contentType, String title, Long count, String content, Boolean isChecked) {
        this.user = user;
        this.post = post;
        this.contentType = contentType;
        this.title = title;
        this.count = count;
        this.content = content;
        this.isChecked = isChecked;
    }
}
