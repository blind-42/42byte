package com.blind.api.domain.post.v2.dto;


import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.RoleType;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
public class PostDetailDTO {
    private Long id;
    private Long viewId;
    private Long boardId;
    private String boardName;
    private String title;
    private String content;
    private Long viewCnt;
    private Long likeCnt;
    private Boolean isNotice;
    private Boolean isUsers;
    private Boolean isLiked;
    private RoleType roleType;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;

    public static PostDetailDTO from(Post post, Boolean isUsers, Boolean isLiked, RoleType roleType) {
        return PostDetailDTO.builder()
                .id(post.getId())
                .viewId(post.getViewId())
                .boardId(post.getBoard().getId())
                .boardName(post.getBoard().getName())
                .title(post.getTitle())
                .content(post.getContent())
                .viewCnt(post.getViewCnt())
                .likeCnt(post.getLikeCnt())
                .isNotice(post.getIsNotice())
                .isUsers(isUsers)
                .isLiked(isLiked)
                .roleType(roleType)
                .createdDate(post.getCreatedDate())
                .modifiedDate(post.getModifiedDate())
                .build();
    }

    @Builder
    private PostDetailDTO(Long id, Long viewId, Long boardId, String boardName, String title, String content, Long viewCnt, Long likeCnt, Boolean isNotice, Boolean isUsers, Boolean isLiked, RoleType roleType, LocalDateTime createdDate, LocalDateTime modifiedDate) {
        this.id = id;
        this.viewId = viewId;
        this.boardId = boardId;
        this.boardName = boardName;
        this.title = title;
        this.content = content;
        this.viewCnt = viewCnt;
        this.likeCnt = likeCnt;
        this.isNotice = isNotice;
        this.isLiked = isLiked;
        this.isUsers = isUsers;
        this.roleType = roleType;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
    }
}
