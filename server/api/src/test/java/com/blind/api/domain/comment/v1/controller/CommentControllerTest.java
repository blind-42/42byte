package com.blind.api.domain.comment.v1.controller;

import com.blind.api.common.RestDocsConfiguration;
import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.repository.BoardRepository;
import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.comment.v1.service.CommentService;
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
class CommentControllerTest {

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
            board = boardService.save(new Board("board"));
    }

    @Test
    @Transactional
    @DisplayName("댓글 저장")
    void saveComment() throws Exception{
        MultiValueMap<String, String> param = new LinkedMultiValueMap<>();
        Map<String, String> body = new HashMap<>();
        body.put("content", "내용");

        Post post = postService.save(board, user,"title", "content");
        param.add("boardId", String.valueOf(board.getId()));
        param.add("postId", String.valueOf(post.getId()));
        mockMvc.perform(post("/comment").contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(body))
                .params(param)
                .header("Authorization", "Bearer access"))
                .andExpect(status().isOk())
                .andDo(document("comment-save"))
                ;
    }

    @Test
    @Transactional
    @DisplayName("댓글 수정")
    void updateComment() throws Exception {
        Map<String, String> body = new HashMap<>();
        body.put("content", "수정된 내용");

        Post post = postService.save(board, user ,"title", "content");
        Comment comment = commentService.save(board.getId(), post, user, "내용");
        mockMvc.perform(put("/comment").contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(body))
                        .param("commentId", String.valueOf(comment.getId()))
                        .header("Authorization", "Bearer access"))
                .andExpect(status().isOk())
                .andDo(document("comment-update"))
        ;
    }

    @Test
    @Transactional
    @DisplayName("댓글 삭제")
    void deleteComment() throws Exception{
        Post post = postService.save(board, user ,"title", "content");
        Comment comment = commentService.save(board.getId(), post, user, "내용");
        mockMvc.perform(delete("/comment")
                        .param("commentId", String.valueOf(comment.getId()))
                        .header("Authorization", "Bearer access"))
                .andExpect(status().isOk())
                .andDo(document("comment-delete"))
        ;
    }

    @Test
    @Transactional
    @DisplayName("내가 쓴 댓글 조회")
    void findCommentByUserId() throws Exception{
        Post post = postService.save(board, user,"title", "content");
        for (int i = 0; i< 24; i++){
            commentService.save(board.getId(), post,user, "내용1");
        }
        mockMvc.perform(get("/mypage/comment")
                        .header("Authorization", "Bearer access"))
                .andExpect(status().isOk())
                .andDo(document("comment-mypage"))
        ;
    }
}