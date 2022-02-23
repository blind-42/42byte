package com.blind.api.domain.board.v1.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
public class BoardRequestDTO {
    @Size(max = 255, message="{invalid.request}")
    @NotBlank(message = "{invalid.request.NotNull}")
    private String name;
}
