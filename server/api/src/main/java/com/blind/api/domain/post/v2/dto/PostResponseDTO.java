package com.blind.api.domain.post.v2.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class PostResponseDTO<T> {
    private String name;
    private Long id;
    private List<T> contents;
    private int page;
    private int pages;

    public PostResponseDTO(){
        this.contents = new ArrayList<T>();
        this.page = 0;
        this.pages = 0;
    }

    public void setPage(int page){
        this.page = page + 1;
    }
}

