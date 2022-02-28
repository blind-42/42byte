package com.blind.api.domain.admin.contorller;

import com.blind.api.common.RestDocsConfiguration;
import com.blind.api.domain.admin.service.AdminService;
import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.repository.BoardRepository;
import com.blind.api.domain.board.v1.service.BoardService;
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
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import javax.transaction.Transactional;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureRestDocs
@AutoConfigureMockMvc
@Import(RestDocsConfiguration.class)
class AdminControllerImplTest {

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
    private PostRepository postRepository;

    @Autowired
    @Mock
    private CommentRepository commentRepository;

    @Autowired
    @Mock
    private UserRepository userRepository;

    @Autowired
    @Mock
    private TokenRepository tokenRepository;


    @Autowired
    @Mock
    private BoardRepository boardRepository;

    @Autowired
    @Mock
    private BoardService boardService;

    @Autowired
    @Mock
    private AdminService adminService;

    @Autowired
    @Mock
    private UserRefreshTokenRepository testTokenRepository;

    @Autowired
    @Mock
    private UserRepository testUserRepository;

    private Token token;
    private User user;
    private User user1;
    private User user2;
    private Board board;
    private Post post;
    private Comment comment;

    @BeforeEach
    void init() {
        user = userRepository.findByHashId("hash").orElseGet(()->null);
        if (user == null) {
            user = new User();
            user.setHashId("hash");
            user.setRoleType(RoleType.ADMIN);
            testUserRepository.save(user);
        }
        token = tokenRepository.findByAccessToken("access0").orElseGet(()-> null);
        if (token == null) {
            token = new Token();
            token.setAccessToken("access0");
            token.setRefreshToken("refresh0");
            token.setUser(user);
            testTokenRepository.save(token);
        }
        user1 = userRepository.findByHashId("hashId").orElseGet(()->null);
        if (user1 == null) {
            user1 = new User();
            user1.setHashId("hashId");
            user1.setRoleType(RoleType.USER);
            testUserRepository.save(user1);
        }
        token = tokenRepository.findByAccessToken("access").orElseGet(()-> null);
        if (token == null) {
            token = new Token();
            token.setAccessToken("access");
            token.setRefreshToken("refresh");
            token.setUser(user1);
            testTokenRepository.save(token);
        }
        user2 = userRepository.findByHashId("hashId2").orElseGet(()->null);
        if (user2 == null) {
            user2 = new User();
            user2.setHashId("hashId2");
            user2.setRoleType(RoleType.USER);
            testUserRepository.save(user2);
        }
        token = tokenRepository.findByAccessToken("access2").orElseGet(()-> null);
        if (token == null) {
            token = new Token();
            token.setAccessToken("access2");
            token.setRefreshToken("refresh2");
            token.setUser(user2);
            testTokenRepository.save(token);
        }
        board = boardRepository.findBoardByName("board").orElseGet(()-> null);
        if (board == null)
            board = boardRepository.save(new Board(user, "board"));
        post = postRepository.findById(1L).orElseGet(()-> null);
        if (post == null)
            post = postService.save(board, user,"title", "content");
        comment = commentRepository.findById(1L).orElseGet(()->null);
        if (comment == null)
            comment = commentService.save(board.getId(),post, user, "content");
        }

    @Test
    @Transactional
    @DisplayName("관리자 등록")
    void setAdmin() throws Exception{
        mockMvc.perform(post("/admin/User")
                .param("targetUserId", String.valueOf(user1.getId()))
                .header("Authorization", "Bearer access0"))
                .andExpect(status().isOk())
                .andDo(document("set-admin"))
                ;
    }

    @Test
    @Transactional
    @DisplayName("관리자 삭제")
    void deleteAdmin() throws Exception{
        adminService.setAdmin(user1);
        mockMvc.perform(delete("/admin/User")
                        .param("targetUserId", String.valueOf(user1.getId()))
                        .header("Authorization", "Bearer access0"))
                .andExpect(status().isOk())
                .andDo(document("delete-admin"))
        ;
    }

    @Test
    @Transactional
    @DisplayName("매니저 등록")
    void setManager() throws Exception{
        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("boardId", String.valueOf(board.getId()));
        body.add("targetUserId", String.valueOf(user1.getId()));
        mockMvc.perform(post("/admin/manager")
                        .params(body)
                        .header("Authorization", "Bearer access0"))
                .andExpect(status().isOk())
                .andDo(document("set-manager"))
        ;
    }

    @Test
    @Transactional
    @DisplayName("매니저 삭제")
    void deleteManager() throws Exception{
        boardService.setManager(board, user1);
        mockMvc.perform(delete("/admin/manager")
                        .param("boardId", String.valueOf(board.getId()))
                        .header("Authorization", "Bearer access0"))
                .andExpect(status().isOk())
                .andDo(document("delete-manager"))
        ;
    }

    @Test
    @Transactional
    @DisplayName("게시판 삭제")
    void deleteBoard() throws Exception{
        mockMvc.perform(delete("/admin/delete/board")
                        .param("boardId", String.valueOf(board.getId()))
                        .header("Authorization", "Bearer access0"))
                .andExpect(status().isOk())
                .andDo(document("delete-board"))
        ;
    }

    @Test
    @Transactional
    @DisplayName("게시글 삭제")
    void deletePost() throws Exception{
        mockMvc.perform(delete("/admin/delete/post")
                        .param("postId", String.valueOf(post.getId()))
                        .header("Authorization", "Bearer access0"))
                .andExpect(status().isOk())
                .andDo(document("delete-post"))
        ;
    }

    @Test
    @Transactional
    @DisplayName("댓글 삭제")
    void deleteComment() throws Exception {
        mockMvc.perform(delete("/admin/delete/comment")
                        .param("commentId", String.valueOf(comment.getId()))
                        .header("Authorization", "Bearer access0"))
                .andExpect(status().isOk())
                .andDo(document("delete-comment"))
        ;
    }

    @Test
    @Transactional
    @DisplayName("게시판 매니저 조회")
    void findAllManagers() throws Exception{
        boardService.save(user2, "something");
        boardService.save(user1, "wow");
        mockMvc.perform(get("/admin/manager")
                        .header("Authorization", "Bearer access0"))
                .andExpect(status().isOk())
                .andDo(document("all-board"))
        ;
    }

    @Test
    @Transactional
    @DisplayName("게시글 차단 해제 - 신고 횟수")
    void unBlockPost_blame() throws Exception{
        /* 신고 횟수가 5회 이상*/
        Post blockedPost = postService.save(board,user,"title", "content");
        blockedPost.setBlameCnt(5L);
        blockedPost.setIsDel(0);
        postService.updatePost(blockedPost);
        mockMvc.perform(post("/admin/restore/post")
                        .param("postId", blockedPost.getId().toString())
                        .header("Authorization", "Bearer access0"))
                .andExpect(status().isOk())
                .andDo(document("all-board"))
        ;
    }

    @Test
    @Transactional
    @DisplayName("게시글 차단 해제 - 관리자 삭제")
    void unBlockPost_Admin() throws Exception{
        /* 관리자에 의해 삭제 */
        Post blockedPost = postService.save(board,user,"title", "content");
        blockedPost.setIsDel(3);

        postService.updatePost(blockedPost);
        mockMvc.perform(post("/admin/restore/post")
                        .param("postId", blockedPost.getId().toString())
                        .header("Authorization", "Bearer access0"))
                .andExpect(status().isOk())
                .andDo(document("all-board"))
        ;
    }
}
