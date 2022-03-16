package com.blind.api.domain.notification.DTO;

import com.blind.api.domain.notification.domain.Noti;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NotiDTO {
    private Long id;
    private Long postId;
    private String contentType;
    private String title;
    private String content;

    public NotiDTO(Noti noti) {
        this.id = noti.getId();
        this.postId = noti.getPost().getId();
        this.contentType = noti.getContentType();
        this.title = noti.getTitle();
        this.content = noti.getContent();
    }
}
