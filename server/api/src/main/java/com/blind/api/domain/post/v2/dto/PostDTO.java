package com.blind.api.domain.post.v2.dto;

import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.RoleType;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
public class PostDTO {
    private Long id;
    private String title;
    private Long commentCnt;
    private Long viewCnt;
    private Long likeCnt;
    private Boolean isNotice;
    private Integer isDel;
    private RoleType type;
    private Boolean isImage;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;

    public static PostDTO from(Post post, RoleType type) {
        return PostDTO.builder()
                .id(post.getId())
                .title(post.getTitle())
                .viewCnt(post.getViewCnt())
                .likeCnt(post.getLikeCnt())
                .commentCnt(post.getCommentCnt())
                .isNotice(post.getIsNotice())
                .isDel(post.getIsDel())
                .type(type)
                .isImage(post.getIsImage())
                .createdDate(post.getCreatedDate())
                .modifiedDate(post.getModifiedDate())
                .build();
    }

    @Builder
    private PostDTO(Long id, String title, Long commentCnt, Long viewCnt, Long likeCnt, Boolean isNotice, Integer isDel, RoleType type, Boolean isImage, LocalDateTime createdDate, LocalDateTime modifiedDate) {
        this.id = id;
        this.title = title;
        this.commentCnt = commentCnt;
        this.viewCnt = viewCnt;
        this.likeCnt = likeCnt;
        this.isNotice = isNotice;
        this.isDel = isDel;
        this.type = type;
        this.isImage = isImage;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
    }
}
