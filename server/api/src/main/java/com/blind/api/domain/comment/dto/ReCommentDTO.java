package com.blind.api.domain.comment.dto;

import com.blind.api.domain.comment.domain.Comment;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class ReCommentDTO {
    private Long id;
    private Long authorId;
    private Long rootCommentId;
    private Long targetAuthorId;
    private String content;
    private Long likeCnt;
    private Long blameCnt;
    private Boolean isAuthor;
    private Integer isDel;
    private Boolean isUsers;
    private Boolean isLiked;
    private List<ReCommentDTO> recomments;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;

    public static ReCommentDTO from(Comment comment) {
        return ReCommentDTO.builder()
                .id(comment.getId())
                .authorId(comment.getAuthorId())
                .rootCommentId(comment.getRootCommentId())
                .targetAuthorId(comment.getTargetAuthorId())
                .content(comment.getContent())
                .likeCnt(comment.getLikeCnt())
                .blameCnt(comment.getBlameCnt())
                .isAuthor(comment.getIsAuthor())
                .isDel(comment.getIsDel())
                .createdDate(comment.getCreatedDate())
                .modifiedDate(comment.getModifiedDate())
                .build();
    }

    @Builder
    private ReCommentDTO(Long id, Long authorId, Long rootCommentId, Long targetAuthorId, String content, Long likeCnt, Long blameCnt, Boolean isAuthor, Integer isDel, Boolean isLiked, LocalDateTime createdDate, LocalDateTime modifiedDate) {
        this.id = id;
        this.authorId = authorId;
        this.rootCommentId = rootCommentId;
        this.targetAuthorId = targetAuthorId;
        this.content = content;
        this.likeCnt = likeCnt;
        this.blameCnt = blameCnt;
        this.isAuthor = isAuthor;
        this.isDel = isDel;
        this.isLiked = isLiked;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
    }
}
