package com.blind.api.domain.blame.controller;

import com.blind.api.common.RestDocsConfiguration;
import com.blind.api.domain.blame.service.BlameService;
import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.repository.BoardRepository;
import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.comment.repository.CommentRepository;
import com.blind.api.domain.comment.service.CommentService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.repository.PostRepository;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.security.jwt.v1.domain.Token;
import com.blind.api.domain.security.jwt.v1.repository.TokenRepository;
import com.blind.api.domain.security.oauth.v2.repository.UserRefreshTokenRepository;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.web.servlet.MockMvc;

import javax.transaction.Transactional;

import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureRestDocs
@AutoConfigureMockMvc
@Import(RestDocsConfiguration.class)
class BlameControllerImplTest {
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
    private BoardRepository boardService;

    @Autowired
    @Mock
    private UserRefreshTokenRepository testTokenRepository;

    @Autowired
    @Mock
    private UserRepository testUserRepository;

    @Autowired
    @Mock
    private TokenRepository tokenRepository;

    @Autowired
    @Mock
    private PostRepository postRepository;

    @Autowired
    @Mock
    private CommentRepository commentRepository;

    @Autowired
    @Mock
    private BlameService blameService;

    private Token token;
    private User user;
    private Board board;
    private Post post;
    private Comment comment;

    @BeforeEach
    void init() {
        user = testUserRepository.findByHashId("hashId").orElseGet(()->null);
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
        post = postRepository.findById(1L).orElseGet(()-> null);
        if (post == null)
            post = postService.save(board, user,"title", "content");
        comment = commentRepository.findById(1L).orElseGet(()->null);
        if (comment == null)
            comment = commentService.save(board.getId(),post, user, "content");
    }

    @Test
    @Transactional
    void postBlame() throws Exception{
        mockMvc.perform(post("/post/blame")
                .param("postId", String.valueOf(post.getId()))
                    .content("reason")
                    .header("Authorization", "Bearer access"))
                .andExpect(status().isOk())
                .andDo(document("blame-post"))
                ;
    }

    @Test
    @Transactional
    void commentBlame() throws Exception{
        mockMvc.perform(post("/comment/blame")
                        .param("commentId", String.valueOf(comment.getId()))
                        .content("reason")
                        .header("Authorization", "Bearer access"))
                .andExpect(status().isOk())
                .andDo(document("blame-comment"))
        ;
    }

    @Test
    @Transactional
    void findAllPost() throws Exception{
        blameService.blamePost(post, user, "reason");
        mockMvc.perform(get("/blame/post")
                .header("Authorization", "Bearer access"))
                .andExpect(status().isOk())
                .andDo(document("blamed-post"))
                ;
    }

    @Test
    @Transactional
    void findAllComment() throws Exception{
        blameService.blameComment(comment, user, "reason");
        mockMvc.perform(get("/blame/comment")
                        .header("Authorization", "Bearer access"))
                .andExpect(status().isOk())
                .andDo(document("blamed-comment"))
        ;
    }
}