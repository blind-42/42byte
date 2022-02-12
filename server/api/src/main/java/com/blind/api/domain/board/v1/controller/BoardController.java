package com.blind.api.domain.board.v1.controller;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.service.BoardService;
import com.blind.api.domain.security.jwt.v1.domain.Token;
import com.blind.api.domain.security.oauth.v2.repository.UserRefreshTokenRepository;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.repository.UserRepository;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;

@RestController
@AllArgsConstructor
public class BoardController {
    private final BoardService boardService;
    private final UserRefreshTokenRepository testTokenRepository;
    private final UserRepository testUserRepository;

    @RequestMapping(value="/board", method = RequestMethod.POST)
    @ApiOperation(value = "게시판 생성", notes = "게시판을 생성하는 API입니다.")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "name", value = "게시판 이름", required = true)
    })
    public Board createPost(@RequestParam String name) {
        return boardService.save(name);
    }

}
