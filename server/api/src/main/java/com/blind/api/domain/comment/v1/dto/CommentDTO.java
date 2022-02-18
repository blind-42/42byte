package com.blind.api.domain.comment.v1.dto;

import com.blind.api.domain.comment.v1.domain.Comment;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentDTO {
    private Long id;
    private Long boardId;
    private Long postId;
    private Long authorId;
    private String content;
    private Long likeCnt;
    private Long blameCnt;
    private Boolean isAuthor;
    private Boolean isDel;
    private Boolean isUsers;

    public static CommentDTO from(Comment comment) {
        return CommentDTO.builder()
                .id(comment.getId())
                .boardId(comment.getBoardId())
                .postId(comment.getPost().getId())
                .authorId(comment.getAuthorId())
                .content(comment.getContent())
                .likeCnt(comment.getLikeCnt())
                .blameCnt(comment.getBlameCnt())
                .isAuthor(comment.getIsAuthor())
                .isDel(comment.getIsDel())
                .build();
    }

    @Builder
    private CommentDTO(Long id, Long boardId, Long postId, Long authorId, String content, Long likeCnt, Long blameCnt, Boolean isAuthor, Boolean isDel) {
        this.id = id;
        this.boardId = boardId;
        this.postId = postId;
        this.authorId = authorId;
        this.content = content;
        this.likeCnt = likeCnt;
        this.blameCnt = blameCnt;
        this.isAuthor = isAuthor;
        this.isDel = isDel;
    }
}
