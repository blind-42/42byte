package com.blind.api.domain.post.v2.dto;


import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.RoleType;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
public class PostDetailDTO {
    private Long id;
    private Long boardId;
    private String boardName;
    private String title;
    private String content;
    private Long commentCnt;
    private Long viewCnt;
    private Long likeCnt;
    private Boolean isNotice;
    private Boolean isUsers;
    private Boolean isLiked;
    private RoleType type;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;

    public static PostDetailDTO from(Post post, Boolean isUsers, Boolean isLiked, RoleType type) {
        return PostDetailDTO.builder()
                .id(post.getId())
                .boardId(post.getBoard().getId())
                .boardName(post.getBoard().getName())
                .title(post.getTitle())
                .content(post.getContent())
                .viewCnt(post.getViewCnt())
                .likeCnt(post.getLikeCnt())
                .commentCnt(post.getCommentCnt())
                .isNotice(post.getIsNotice())
                .isUsers(isUsers)
                .isLiked(isLiked)
                .type(type)
                .createdDate(post.getCreatedDate())
                .modifiedDate(post.getModifiedDate())
                .build();
    }

    @Builder
    private PostDetailDTO(Long id, Long boardId, String boardName, String title, String content, Long commentCnt, Long viewCnt, Long likeCnt, Boolean isNotice, Boolean isUsers, Boolean isLiked, RoleType type, LocalDateTime createdDate, LocalDateTime modifiedDate) {
        this.id = id;
        this.boardId = boardId;
        this.boardName = boardName;
        this.title = title;
        this.content = content;
        this.commentCnt = commentCnt;
        this.viewCnt = viewCnt;
        this.likeCnt = likeCnt;
        this.isNotice = isNotice;
        this.isLiked = isLiked;
        this.isUsers = isUsers;
        this.type = type;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
    }
}
