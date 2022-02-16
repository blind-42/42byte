package com.blind.api.domain.comment.v1.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CommentResponseDTO {
    private List<CommentDTO> contents;
    private int page;
    private int pages;

    public CommentResponseDTO() {
        this.contents = new ArrayList<CommentDTO>();
        this.page = 0;
        this.pages = 0;
    }

}
