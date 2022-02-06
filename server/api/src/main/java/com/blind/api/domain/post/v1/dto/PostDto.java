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
@AllArgsConstructor
@NoArgsConstructor
public class PostDto {
    private Long postIdx;
    private String title;
    private Long userSeq;
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
                .userSeq(userSeq)
                .title(title)
                .content(content)
                .viewCnt(0L)
                .likeCnt(0L)
                .isNotice(false)
                .blameCnt(0L)
                .build();
        return postEntity;
    }

    public void setUser(Long userSeq) {
        this.userSeq = userSeq;
    }

    @Builder
    public PostDto(Long postIdx, String title, Long userSeq, String content, Long viewCnt, Long likeCnt, LocalDateTime createdDate, LocalDateTime modifiedDate, Boolean isNotice, Long blameCnt) {
        this.postIdx = postIdx;
        this.title = title;
        this.userSeq = userSeq;
        this.content = content;
        this.viewCnt = viewCnt;
        this.likeCnt = likeCnt;
        this.isNotice = isNotice;
        this.blameCnt = blameCnt;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
    }
}
