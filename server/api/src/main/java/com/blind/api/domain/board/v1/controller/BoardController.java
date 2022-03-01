package com.blind.api.domain.board.v1.controller;

import com.blind.api.domain.board.v1.dto.BoardDTO;
import com.blind.api.domain.board.v1.dto.BoardPageResponseDTO;
import com.blind.api.domain.board.v1.dto.BoardRequestDTO;
import com.blind.api.domain.board.v1.dto.BoardResponseDTO;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.RequestBody;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;

public interface BoardController {
    BoardDTO createBoard(@RequestBody @Valid BoardRequestDTO requestDTO, HttpServletRequest request);
    BoardResponseDTO findAllBoard(Pageable pageable, HttpServletRequest request);
    BoardPageResponseDTO findAllBoardByUserId (@SortDefault.SortDefaults({@SortDefault(sort = "id", direction = Sort.Direction.DESC)})Pageable pageable, HttpServletRequest request);
}
