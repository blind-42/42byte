package com.blind.api.domain.post.v2.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
public class PostRequestDTO {
    @Size(max = 255, message = "{invalid.request}")
    @NotBlank(message = "{invalid.request.NotNull}")
    private String title;
    @Size(max = 65535, message = "{invalid.request}")
    @NotBlank(message = "{invalid.request.NotNull}")
    private String content;
    private Boolean isImage;
}
