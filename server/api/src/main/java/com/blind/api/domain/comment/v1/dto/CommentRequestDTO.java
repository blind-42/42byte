package com.blind.api.domain.comment.v1.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
public class CommentRequestDTO {
    @Size(max = 65535, message = "{invalid.request}")
    @NotBlank(message = "{invalid.request.NotNull}")
    private String content;
}
