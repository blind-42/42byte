package com.blind.api.domain.post.v2.dto;


import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.post.v2.domain.Post;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
public class PostDetailDTO {
    private Long id;
    private Long authorId;
    private String title;
    private String content;
    private Long commentCnt;
    private Long viewCnt;
    private Long likeCnt;
    private Boolean isNotice;
    private Long blameCnt;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;

    public static PostDetailDTO from(Post post) {
        return PostDetailDTO.builder()
                .id(post.getId())
                .authorId(post.getAuthorId())
                .title(post.getTitle())
                .content(post.getContent())
                .board(post.getBoard())
                .viewCnt(post.getViewCnt())
                .blameCnt(post.getBlameCnt())
                .likeCnt(post.getLikeCnt())
                .commentCnt(post.getCommentCnt())
                .isNotice(post.getIsNotice())
                .createdDate(post.getCreatedDate())
                .modifiedDate(post.getModifiedDate())
                .build();
    }

    @Builder
    private PostDetailDTO(Long id, Long authorId, String title, String content, Long commentCnt, Long viewCnt, Long likeCnt, Boolean isNotice, Long blameCnt, LocalDateTime createdDate, LocalDateTime modifiedDate, Board board) {
        this.id = id;
        this.authorId = authorId;
        this.title = title;
        this.content = content;
        this.commentCnt = commentCnt;
        this.viewCnt = viewCnt;
        this.likeCnt = likeCnt;
        this.isNotice = isNotice;
        this.blameCnt = blameCnt;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
    }
}
