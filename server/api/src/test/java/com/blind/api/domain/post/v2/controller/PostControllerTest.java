package com.blind.api.domain.post.v2.controller;

import com.blind.api.common.RestDocsConfiguration;
import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.repository.BoardRepository;
import com.blind.api.domain.board.v1.service.BoardService;
import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.comment.service.CommentService;
import com.blind.api.domain.comment.service.ReCommentService;
import com.blind.api.domain.like.service.LikeService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.dto.PostDTO;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import com.blind.api.domain.post.v2.repository.PostRepository;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.security.jwt.v1.domain.Token;
import com.blind.api.domain.security.jwt.v1.repository.TokenRepository;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.security.oauth.v2.repository.UserRefreshTokenRepository;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.repository.UserRepository;
import com.blind.api.domain.user.v2.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.aspectj.lang.annotation.Before;
import org.checkerframework.checker.units.qual.A;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import javax.transaction.Transactional;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureRestDocs
@AutoConfigureMockMvc
@Import(RestDocsConfiguration.class)
class PostControllerTest {

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
    private LikeService likeService;

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
        if (board == null) {
            board = boardService.save(new Board(user, "board"));
        }
    }

    @Test
    @Transactional
    @DisplayName("전체 게시판 조회")
    void findAllPost() throws Exception {
        postService.save(board, user, "title", "content");
        postService.save(board, user, "title", "content");
        postService.save(board, user, "title", "content");
        postService.save(board, user, "title", "content");
        postService.save(board, user, "title", "content");
        mockMvc.perform(get("/board")
                    .param("boardId", String.valueOf(board.getId()))
                    .header("Authorization", "Bearer access"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andDo(document("find-all-posts"))
                ;
    }

    @Test
    @Transactional
    @DisplayName("게시판 검색")
    void searchPost() throws Exception{
        String keyword = "title";

        postService.save(board, user, "title", "content");
        postService.save(board, user, "title", "content");
        postService.save(board, user, "title", "content");
        postService.save(board, user, "title", "content");
        postService.save(board, user, "title", "content");
        postService.save(board, user, "title", "content");
        mockMvc.perform(get("/board/search")
                        .param("keyword", keyword)
                        .header("Authorization", "Bearer access"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andDo(document("search-posts"))
        ;
    }

    @Test
    @Transactional
    @DisplayName("게시글 생성")
    void createPost() throws Exception{
        Map<String, String> body = new HashMap<>();
        body.put("title", "title");
        body.put("content", "content");
        mockMvc.perform(post("/post").contentType(MediaType.APPLICATION_JSON)
                .param("boardId", String.valueOf(board.getId()))
                        .content(objectMapper.writeValueAsString(body))
                        .header("Authorization", "Bearer access"))
                .andExpect(status().isOk())
                .andDo(document("post-save"))
                ;
    }

    @Test
    @Transactional
    @DisplayName("게시글 상세조회")
    void findPostDetailByPostId() throws Exception{
        MultiValueMap<String, String> param = new LinkedMultiValueMap<>();

        Post post = postService.save(board, user, "title", "content");
        param.add("boardId", String.valueOf(board.getId()));
        param.add("postId", String.valueOf(post.getId()));
        Comment targetCmmt = commentService.save(board.getId(), post, user,"comment");
        Comment rootCmmt = targetCmmt;
        while (rootCmmt.getRootCommentId() != null)
            rootCmmt = commentService.findCommentById(rootCmmt.getRootCommentId());
        Long userId = user.getId();
        Long rootCmmtId = rootCmmt.getId();
        reCommentService.save(targetCmmt, rootCmmtId, userId, "내용");
        likeService.PostLike(post, user, 0L);
        mockMvc.perform(get("/post")
                .params(param)
                        .header("Authorization", "Bearer access"))
                .andExpect(status().isOk())
                .andDo(document("post-detail"))
                ;
    }

    @Test
    @Transactional
    @DisplayName("게시글 수정")
    void updatePost() throws Exception{
        Map<String, String> body = new HashMap<>();
        MultiValueMap<String, String> param = new LinkedMultiValueMap<>();
        body.put("title", "변경");
        body.put("content", "내용 변경");

        Post post = postService.save(board, user, "title", "content");
        param.add("boardId", String.valueOf(board.getId()));
        param.add("postId", String.valueOf(post.getId()));
        mockMvc.perform(put("/post").contentType(MediaType.APPLICATION_JSON)
                        .params(param)
                        .content(objectMapper.writeValueAsString(body))
                        .header("Authorization", "Bearer access"))
                .andExpect(status().isOk())
                .andDo(document("post-update"))
        ;
    }

    @Test
    @Transactional
    @DisplayName("게시글 삭제")
    void deletePost() throws Exception{

        Post post = postService.save(board, user, "title", "content");
        commentService.save(board.getId(), post, user,"comment");
        likeService.PostLike(post, user, 1L);
        mockMvc.perform(delete("/post")
                .param("postId", String.valueOf(post.getId()))
                .header("Authorization", "Bearer access"))
                .andExpect(status().isOk())
                .andDo(document("post-delete"))
                ;
    }

    @Test
    @Transactional
    @DisplayName("내가 쓴 게시글 조회")
    void findPostByUserId() throws Exception{
        postService.save(board, user, "title", "content");
        postService.save(board, user, "title", "content");
        postService.save(board, user, "title", "content");
        postService.save(board, user, "title", "content");
        postService.save(board, user, "title", "content");
        mockMvc.perform(get("/mypage/post")
                .header("Authorization", "Bearer access"))
                .andExpect(status().isOk())
                .andDo(document("post-mypage"))
                ;
    }
}