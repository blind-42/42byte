package com.blind.api.domain.board.v1.controller;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.service.BoardService;
import com.blind.api.domain.security.jwt.v1.domain.Token;
import com.blind.api.domain.security.oauth.v2.repository.UserRefreshTokenRepository;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.repository.UserRepository;
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
    public Board createPost(@RequestBody String name) {
        return boardService.save(name);
    }

    @PostConstruct
    public void initiallize() {
        Token token = new Token();
        token.setAccessToken("access");
        token.setRefreshToken("refresh");
        token.setHashId("hashId");
        testTokenRepository.save(token);

        User user = new User();
        user.setHashId("hashId");
        user.setRoleType(RoleType.USER);
        testUserRepository.save(user);
    }
}
