package com.blind.api.domain.comment.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CommentListResponseDTO<T> {
    private List<T> contents;
    private Long total;

    public CommentListResponseDTO() {
        this.contents = new ArrayList<T>();
    }
}
