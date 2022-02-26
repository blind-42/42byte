package com.blind.api.domain.board.v1.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class BoardPageResponseDTO {
    private List<BoardDTO> contents;
    private int page;
    private int pages;

    public BoardPageResponseDTO(){
        this.contents = new ArrayList<>();
        this.page = 0;
        this.pages = 0;
    }

    public void setPage(int page){
        this.page = page + 1;
    }
}
