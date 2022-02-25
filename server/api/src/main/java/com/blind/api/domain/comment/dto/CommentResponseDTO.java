package com.blind.api.domain.comment.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CommentResponseDTO<T> {
    private List<T> contents;
    private int page;
    private int pages;

    public CommentResponseDTO() {
        this.contents = new ArrayList<T>();
        this.page = 0;
        this.pages = 0;
    }
    public void setPage(int page){
        this.page = page + 1;
    }
}
