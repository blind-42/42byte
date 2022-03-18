package com.blind.api.domain.comment.controller;

import com.blind.api.common.RestDocsConfiguration;
import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.repository.BoardRepository;
import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.comment.service.CommentService;
import com.blind.api.domain.comment.service.ReCommentService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.security.jwt.v1.domain.Token;
import com.blind.api.domain.security.jwt.v1.repository.TokenRepository;
import com.blind.api.domain.security.oauth.v2.repository.UserRefreshTokenRepository;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.Map;

import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureRestDocs
@AutoConfigureMockMvc
@Import(RestDocsConfiguration.class)
class ReCommentControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    @Mock
    private PostService postService;

    @Autowired
    @Mock
    private CommentService commentService;

    @Autowired
    @Mock
    private ReCommentService reCommentService;

    @Autowired
    @Mock
    private UserRepository userRepository;

    @Autowired
    @Mock
    private TokenRepository tokenRepository;


    @Autowired
    @Mock
    private BoardRepository boardService;

    @Autowired
    @Mock
    private UserRefreshTokenRepository testTokenRepository;

    @Autowired
    @Mock
    private UserRepository testUserRepository;

    private Token token;
    private User user;
    private Board board;

    @BeforeEach
    void init() {
        user = userRepository.findByHashId("hashId").orElseGet(()->null);
        if (user == null) {
            user = new User();
            user.setHashId("hashId");
            user.setRoleType(RoleType.USER);
            testUserRepository.save(user);
        }
        token = tokenRepository.findByAccessToken("access").orElseGet(()-> null);
        if (token == null) {
            token = new Token();
            token.setAccessToken("access");
            token.setRefreshToken("refresh");
            token.setUser(user);
            testTokenRepository.save(token);
        }
        board = boardService.findBoardByName("board").orElseGet(()-> null);
        if (board == null)
            board = boardService.save(new Board(user, "board"));
    }

    @Test
    @Transactional
    @DisplayName("대댓글 저장")
    void saveReComment() throws Exception{
        Post post = postService.save(board, user,"title", "content", false);
        Comment comment = commentService.save(board.getId(), post, user, "내용");
        MultiValueMap<String, String> param = new LinkedMultiValueMap<>();
        param.add("commentId", String.valueOf(comment.getId()));

        Map<String, String> body = new HashMap<>();
        body.put("content", "내용");
        mockMvc.perform(post("/recomment").contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(body))
                        .params(param)
                        .header("Authorization", "Bearer access"))
                .andExpect(status().isOk())
                .andDo(document("recomment-save"))
        ;
    }

    @Test
    @Transactional
    @DisplayName("대댓글 저장")
    void saveReReComment() throws Exception{
        Post post = postService.save(board, user,"title", "content", false);
        Comment comment = commentService.save(board.getId(), post, user, "내용");
        Comment comment1 = reCommentService.save(comment, comment.getId(), user.getId(), "hi");
        MultiValueMap<String, String> param = new LinkedMultiValueMap<>();
        param.add("commentId", String.valueOf(comment1.getId()));

        Map<String, String> body = new HashMap<>();
        body.put("content", "내용");
        mockMvc.perform(post("/recomment").contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(body))
                        .params(param)
                        .header("Authorization", "Bearer access"))
                .andExpect(status().isOk())
                .andDo(document("rerecomment-save"))
        ;
    }
}
