package com.blind.api.domain.post.v1.dto;

import com.blind.api.domain.post.v1.domain.entity.PostEntity;
import lombok.*;

import java.time.LocalDateTime;

//@Getter
//@Setter
//@ToString
//@NoArgsConstructor

@Getter
@Setter
@ToString
@NoArgsConstructor
public class PostDto {
    private Long postIdx;
    private String title;
    private Long author_id;
    private String content;
    private Long viewCnt;
    private Long likeCnt;
    private Boolean isNotice;
    private Long blameCnt;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;

    public PostEntity toEntity() {
        PostEntity postEntity = PostEntity.builder()
                .postIdx(postIdx)
                .author_id(author_id)
                .title(title)
                .content(content)
                .viewCnt(viewCnt)
                .likeCnt(likeCnt)
                .isNotice(isNotice)
                .blameCnt(blameCnt)
                .build();
        return postEntity;
    }

    @Builder
    public PostDto(Long postIdx, String title, Long author_id, String content, Long viewCnt, Long likeCnt, LocalDateTime createdDate, LocalDateTime modifiedDate, Boolean isNotice, Long blameCnt) {
        this.postIdx = postIdx;
        this.title = title;
        this.author_id = author_id;
        this.content = content;
        this.viewCnt = viewCnt;
        this.likeCnt = likeCnt;
        this.isNotice = isNotice;
        this.blameCnt = blameCnt;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
    }
}
