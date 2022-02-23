package com.blind.api.domain.post.v2.dto;

import lombok.Getter;

import javax.validation.constraints.Size;

@Getter
public class PostRequestDTO {
    @Size(min = 2, max = 255, message = "{invalid.request}")
    private String title;
    @Size(min = 2, max = 65535, message = "{invalid.request}")
    private String content;
}
