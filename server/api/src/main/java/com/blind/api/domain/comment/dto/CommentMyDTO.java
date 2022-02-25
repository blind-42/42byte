package com.blind.api.domain.comment.dto;

import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.post.v2.domain.Post;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

@Getter
@Setter
public class CommentMyDTO {
    private Long id;
    private Long boardId;
    private Long postId;
    private String title;
    private Long authorId;
    private String content;
    private Long commentCnt;
    private Long likeCnt;
    private Long blameCnt;
    private Boolean isAuthor;
    private Integer isDel;
    private Boolean isLiked;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;

    public static CommentMyDTO from(Comment comment) {
        return CommentMyDTO.builder()
                .id(comment.getId())
                .boardId(comment.getBoardId())
                .postId(comment.getPost().getId())
                .title(comment.getPost().getTitle())
                .authorId(comment.getAuthorId())
                .content(comment.getContent())
                .commentCnt(comment.getPost().getCommentCnt())
                .likeCnt(comment.getLikeCnt())
                .blameCnt(comment.getBlameCnt())
                .isAuthor(comment.getIsAuthor())
                .isDel(comment.getIsDel())
                .createdDate(comment.getCreatedDate())
                .modifiedDate(comment.getModifiedDate())
                .build();
    }

    @Builder
    private CommentMyDTO(Long id, Long boardId, Long postId, String title, Long authorId, String content, Long commentCnt, Long likeCnt, Long blameCnt, Boolean isAuthor, Integer isDel, Boolean isLiked, LocalDateTime createdDate, LocalDateTime modifiedDate) {
        this.id = id;
        this.boardId = boardId;
        this.postId = postId;
        this.title = title;
        this.authorId = authorId;
        this.content = content;
        this.likeCnt = likeCnt;
        this.blameCnt = blameCnt;
        this.isAuthor = isAuthor;
        this.isDel = isDel;
        this.commentCnt = commentCnt;
        this.isLiked = isLiked;
        this.modifiedDate = modifiedDate;
        this.createdDate = createdDate;
    }

}
