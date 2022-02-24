package com.blind.api.domain.board.v1.controller;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.dto.BoardRequestDTO;
import com.blind.api.domain.board.v1.service.BoardService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@AllArgsConstructor
public class BoardControllerImpl implements BoardController {
    private final BoardService boardService;

    @RequestMapping(value="/board", method = RequestMethod.POST)
    public Board createBoard(BoardRequestDTO requestDTO) {
        String name = requestDTO.getName().trim();
        return boardService.save(name);
    }

    @RequestMapping(value="/board/list", method = RequestMethod.GET)
    public List<Board> findAllBoard() {
        return boardService.findAllBoard();
    }
}
