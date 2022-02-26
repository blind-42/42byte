package com.blind.api.domain.board.v1.dto;

import com.blind.api.domain.board.v1.domain.Board;
import lombok.Builder;
import lombok.Getter;

@Getter
public class BoardDTO {
    private Long id;
    private String name;
    private Integer isDel;
    private Long managerId;

    public static BoardDTO from(Board board){
        return BoardDTO.builder()
                .id(board.getId())
                .name(board.getName())
                .isDel(board.getIsDel())
                .managerId(board.getManager().getId())
                .build();
    }
    @Builder
    public BoardDTO(Long id, String name, Integer isDel, Long managerId) {
        this.id = id;
        this.name = name;
        this.isDel = isDel;
        this.managerId = managerId;
    }
}
