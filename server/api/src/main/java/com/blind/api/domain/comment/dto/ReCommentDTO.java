package com.blind.api.domain.comment.dto;

import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.global.utils.HashUtil;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class ReCommentDTO {
    private Long id;
    private Long postId;
    private Long authorId;
    @JsonIgnore
    private Long rootCommentId;
    private Long targetAuthorId;
    private String content;
    private Long likeCnt;
    private Boolean isAuthor;
    private Integer isDel;
    private Boolean isUsers;
    private Boolean isLiked;
    private Long blameCnt;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;

    public static ReCommentDTO from(Comment comment) {
        return ReCommentDTO.builder()
                .id(comment.getId())
                .postId(comment.getPost().getId())
                .authorId(HashUtil.getHashId(comment.getAuthorId(), comment.getPost().getId()))
                .rootCommentId(comment.getRootCommentId())
                .targetAuthorId(HashUtil.getHashId(comment.getTargetAuthorId(), comment.getPost().getId()))
                .content(comment.getContent())
                .likeCnt(comment.getLikeCnt())
                .isAuthor(comment.getIsAuthor())
                .isDel(comment.getIsDel())
                .blameCnt(comment.getBlameCnt())
                .createdDate(comment.getCreatedDate())
                .modifiedDate(comment.getModifiedDate())
                .build();
    }

    @Builder
    private ReCommentDTO(Long id, Long postId, Long authorId, Long rootCommentId, Long targetAuthorId, String content, Long likeCnt, Boolean isAuthor, Integer isDel, Boolean isLiked, Long blameCnt, LocalDateTime createdDate, LocalDateTime modifiedDate) {
        this.id = id;
        this.postId = postId;
        this.authorId = authorId;
        this.rootCommentId = rootCommentId;
        this.targetAuthorId = targetAuthorId;
        this.content = content;
        this.likeCnt = likeCnt;
        this.isAuthor = isAuthor;
        this.isDel = isDel;
        this.isLiked = isLiked;
        this.blameCnt = blameCnt;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
    }
}
