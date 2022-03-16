package com.blind.api.domain.comment.dto;

import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.global.utils.HashUtil;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CommentDTO {
    private Long id;
    private Long postId;
    private Long authorId;
    private String content;
    private Long likeCnt;
    private Boolean isAuthor;
    private Integer isDel;
    private Boolean isUsers;
    private Boolean isLiked;
    private Long blameCnt;
    private List<ReCommentDTO> recomments;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;

    public static CommentDTO from(Comment comment) {
        return CommentDTO.builder()
                .id(comment.getId())
                .postId(comment.getPost().getId())
                .authorId(HashUtil.getHashId(comment.getAuthorId(), comment.getPost().getId()))
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
    private CommentDTO(Long id, Long postId, Long authorId, String content, Long likeCnt, Boolean isAuthor, Integer isDel, Boolean isLiked, Long blameCnt, LocalDateTime createdDate, LocalDateTime modifiedDate) {
        this.id = id;
        this.postId = postId;
        this.authorId = authorId;
        this.content = content;
        this.likeCnt = likeCnt;
        this.isAuthor = isAuthor;
        this.isDel = isDel;
        this.isLiked = isLiked;
        this.recomments = new ArrayList<>();
        this.blameCnt = blameCnt;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
    }
}
