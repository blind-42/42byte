package com.blind.api.domain.board.v1.controller;

import com.blind.api.domain.board.v1.dto.BoardDTO;
import com.blind.api.domain.board.v1.dto.BoardRequestDTO;
import com.blind.api.domain.board.v1.dto.BoardResponseDTO;
import org.springframework.web.bind.annotation.RequestBody;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

public interface BoardController {
    BoardDTO createBoard(@RequestBody @Valid BoardRequestDTO requestDTO, HttpServletRequest request);
    BoardResponseDTO findAllBoard();
}
