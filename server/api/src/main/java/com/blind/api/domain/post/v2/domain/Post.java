package com.blind.api.domain.post.v2.domain;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.global.entity.BaseTimeEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.util.Assert;

import javax.persistence.*;

@Getter
@Setter
@Entity
@DynamicInsert
@NoArgsConstructor
public class Post extends BaseTimeEntity {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "author_id", length = 20, updatable = false)
    private Long authorId;

    @NotNull
    @Column(name = "title")
    private String title;

    @NotNull
    @Column(name = "content")
    private String content;

    @Column(name = "comment_count", columnDefinition = "Integer default 0", updatable = false)
    private Long commentCnt;

    @Column(name = "view_count", columnDefinition = "Integer default 0", updatable = false)
    private Long viewCnt;

    @Column(name = "like_count", columnDefinition = "Integer default 0", updatable = false)
    private Long likeCnt;

    @Column(name = "is_notice", columnDefinition = "Boolean default false", updatable = false)
    private Boolean isNotice;

    @Column(name = "blame_count", columnDefinition = "Integer default 0", updatable = false)
    private Long blameCnt;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "board_id")
    private Board board;

    @Builder
    public Post(Board board, String title, String content, Long authorId) {
        Assert.notNull(board,"author_id must not be Null");
        Assert.hasText(title,"title must not be empty");
        Assert.hasText(content,"content must not be empty");
        Assert.notNull(authorId,"author_id must not be Null");

        this.board = board;
        this.title = title;
        this.content = content;
        this.authorId = authorId;
    }
}
