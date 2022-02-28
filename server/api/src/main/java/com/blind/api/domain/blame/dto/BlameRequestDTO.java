package com.blind.api.domain.blame.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
public class BlameRequestDTO {
    @Size(max = 65535, message = "{invalid.request}")
    @NotBlank(message = "{invalid.request.NotNull}")
    private String issue;
}
