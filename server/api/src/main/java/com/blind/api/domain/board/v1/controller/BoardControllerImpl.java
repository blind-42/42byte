package com.blind.api.domain.board.v1.controller;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.dto.BoardDTO;
import com.blind.api.domain.board.v1.dto.BoardRequestDTO;
import com.blind.api.domain.board.v1.dto.BoardResponseDTO;
import com.blind.api.domain.board.v1.service.BoardService;
import com.blind.api.domain.security.jwt.v1.domain.Token;
import com.blind.api.domain.security.jwt.v1.repository.TokenRepository;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.repository.UserRepository;
import com.blind.api.global.dto.ResponseDTO;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
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
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;

    @RequestMapping(value="/board", method = RequestMethod.POST)
    public BoardDTO createBoard(BoardRequestDTO requestDTO, HttpServletRequest request) {
        String name = requestDTO.getName().trim();
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Board board = boardService.save(user, name);
        return BoardDTO.from(board);
    }

    @RequestMapping(value="/board/list", method = RequestMethod.GET)
    public BoardResponseDTO findAllBoard() {
        BoardResponseDTO responseDTO = new BoardResponseDTO();
        List<Board> boardList = boardService.findAllBoard();
        Optional.ofNullable(boardList).map(Collection::stream).orElseGet(()-> null)
                .forEach( board -> {
                    responseDTO.getContents().add(BoardDTO.from(board));
                });
        return responseDTO;
    }

    @PostConstruct
    public void init(){
        User user;
        Token token;

        user = userRepository.findByHashId("hashId").orElseGet(()->null);
            if (user == null) {
            user = new User();
            user.setHashId("hashId");
            user.setRoleType(RoleType.USER);
                userRepository.save(user);
        }
        token = tokenRepository.findByAccessToken("access").orElseGet(()-> null);
            if (token == null) {
            token = new Token();
            token.setAccessToken("access");
            token.setRefreshToken("refresh");
            token.setUser(user);
                tokenRepository.save(token);
        }
    }
}
