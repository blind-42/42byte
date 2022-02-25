package com.blind.api.domain.board.v1.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class BoardResponseDTO {
    private List<BoardDTO> contents;

    public BoardResponseDTO(){
        this.contents = new ArrayList<>();
    }
}
