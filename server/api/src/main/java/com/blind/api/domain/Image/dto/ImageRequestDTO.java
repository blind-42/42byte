package com.blind.api.domain.Image.dto;

import com.blind.api.domain.Image.domain.ImgType;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class ImageRequestDTO {
    @NotBlank(message = "{invalid.request.NotNull}")
    private String url;
    @NotBlank(message = "{invalid.request.NotNull}")
    private ImgType type;
}
