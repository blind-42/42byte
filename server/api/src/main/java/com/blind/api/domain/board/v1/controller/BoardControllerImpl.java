package com.blind.api.domain.board.v1.controller;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.dto.BoardRequestDTO;
import com.blind.api.domain.board.v1.service.BoardService;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;


@RestController
@AllArgsConstructor
public class BoardControllerImpl implements BoardController {
    private final BoardService boardService;
    private final TokenService tokenService;

    @RequestMapping(value="/board", method = RequestMethod.POST)
    public Board createBoard(BoardRequestDTO requestDTO, HttpServletRequest request) {
        String name = requestDTO.getName().trim();
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        return boardService.save(user, name);
    }

    @RequestMapping(value="/board/list", method = RequestMethod.GET)
    public List<Board> findAllBoard() {
        return boardService.findAllBoard();
    }
}
