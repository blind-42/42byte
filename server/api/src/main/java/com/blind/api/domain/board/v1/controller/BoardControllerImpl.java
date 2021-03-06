package com.blind.api.domain.board.v1.controller;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.dto.BoardDTO;
import com.blind.api.domain.board.v1.dto.BoardPageResponseDTO;
import com.blind.api.domain.board.v1.dto.BoardRequestDTO;
import com.blind.api.domain.board.v1.dto.BoardResponseDTO;
import com.blind.api.domain.board.v1.service.BoardService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.dto.PostDTO;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import com.blind.api.domain.security.jwt.v1.domain.Token;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.repository.UserRepository;
import com.blind.api.global.dto.ResponseDTO;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;


@RestController
@AllArgsConstructor
public class BoardControllerImpl implements BoardController {
    private final BoardService boardService;
    private final TokenService tokenService;

    /*게시판 생성*/
    @RequestMapping(value="/board", method = RequestMethod.POST)
    public BoardDTO createBoard(BoardRequestDTO requestDTO, HttpServletRequest request) {
        String name = requestDTO.getName().trim();
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Board board = boardService.save(user, name);
        return BoardDTO.from(board);
    }

    /*게시판 목록 조회*/
    @RequestMapping(value="/board/list", method = RequestMethod.GET)
    public BoardResponseDTO findAllBoard(Pageable pageable, HttpServletRequest request) {
        BoardResponseDTO dtoList = new BoardResponseDTO();
        Page<Board> boardList = boardService.findAllBoard(pageable);

        boardList.stream().forEach( board -> {
            dtoList.getContents().add(BoardDTO.from(board));
                });
        dtoList.setPage(dtoList.getPage());
        dtoList.setPages(boardList.getTotalPages());
        return dtoList;
    }

    /*내가 만든 게시판 조회*/
    @RequestMapping(value={"/mypage/board"}, method = RequestMethod.GET)
    public BoardPageResponseDTO findAllBoardByUserId (Pageable pageable, HttpServletRequest request){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Page<Board> savePageable = boardService.findAllBoardByUser(user, pageable);

        BoardPageResponseDTO dtoList = new BoardPageResponseDTO();
        savePageable.stream().forEach( board -> {
            dtoList.getContents().add(BoardDTO.from(board));
        });
        dtoList.setPage(savePageable.getPageable().getPageNumber());
        dtoList.setPages(savePageable.getTotalPages());
        return dtoList;
    }
}
