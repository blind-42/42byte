package com.blind.api.domain.post.v2.dto;


import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.RoleType;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
public class PostDetailDTO {
    private Long id;
    private String title;
    private String content;
    private Long commentCnt;
    private Long viewCnt;
    private Long likeCnt;
    private Boolean isNotice;
    private Boolean isUsers;
    private Long blameCnt;
    private Boolean isLiked;
    private RoleType type;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;

    public static PostDetailDTO from(Post post, Boolean isUsers, Boolean isLiked, RoleType type) {
        return PostDetailDTO.builder()
                .id(post.getId())
                .title(post.getTitle())
                .content(post.getContent())
                .viewCnt(post.getViewCnt())
                .blameCnt(post.getBlameCnt())
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
    private PostDetailDTO(Long id, String title, String content, Long commentCnt, Long viewCnt, Long likeCnt, Boolean isNotice, Boolean isUsers, Long blameCnt, Boolean isLiked, RoleType type, LocalDateTime createdDate, LocalDateTime modifiedDate) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.commentCnt = commentCnt;
        this.viewCnt = viewCnt;
        this.likeCnt = likeCnt;
        this.isNotice = isNotice;
        this.blameCnt = blameCnt;
        this.isLiked = isLiked;
        this.type = type;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
    }
}
