package com.blind.api.domain.post.v1.domain.entity;

import com.blind.api.global.entity.BaseTimeEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import javax.validation.constraints.Size;


@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@DynamicInsert
@DynamicUpdate
@Table(name = "post")
public class PostEntity extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postIdx;

    @Column(name = "title", length = 24)
    @Size(max = 24)
    private String title;

    @Column(name = "author_id", length = 20, updatable = false)
    private Long author_id;

    @Column(name = "content", length = 4200)
    @Size(max = 4200)
    private String content;

    @Column(name = "view_count", columnDefinition = "Integer default 0", updatable = false)
    private Long viewCnt;

    @Column(name = "like_count", columnDefinition = "Integer default 0", updatable = false)
    private Long likeCnt;

    @Column(name = "is_notice", columnDefinition = "Boolean default 0", updatable = false)
    private Boolean isNotice;

    @Column(name = "is_blamed", columnDefinition = "Integer default 0", updatable = false)
    private Long blameCnt;

    @Builder
    public PostEntity(Long postIdx, String title, Long author_id, String content, Long viewCnt, Long likeCnt, Boolean isNotice, Long blameCnt) {
        this.postIdx = postIdx;
        this.title = title;
        this.author_id = author_id;
        this.content = content;
        this.viewCnt = viewCnt;
        this.likeCnt = likeCnt;
        this.isNotice = isNotice;
        this.blameCnt = blameCnt;
    }
}
