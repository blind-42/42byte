package com.blind.api.web.management;

import com.blind.api.domain.admin.service.AdminService;
import com.blind.api.domain.blame.domain.CommentBlame;
import com.blind.api.domain.blame.domain.PostBlame;
import com.blind.api.domain.blame.service.BlameService;
import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.service.BoardService;
import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.comment.service.CommentService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.service.UserService;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Array;
import java.util.*;
import java.util.stream.Collectors;

@Controller
@AllArgsConstructor
public class ManagementController {
    private final TokenService tokenService;
    private final UserService userService;
    private final BoardService boardService;
    private final AdminService adminService;
    private final PostService postService;
    private final CommentService commentService;
    private final BlameService blameService;

    /* 관리자 관리 */
    @GetMapping("/admin/admin")
    public String adminPage(Model model) {
        Pageable pageable = Pageable.unpaged();
        List<User> userList = userService.findAllByRoleType(RoleType.USER);
        List<User> adminList = userService.findAllByRoleType(RoleType.ADMIN);
        model.addAttribute("adminList", adminList);
        model.addAttribute("userList", userList);
        //model.addAttribute("token", "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1N2NiMjI2YmViMTg5YTZlZWUxYzRlOGY3ZmYxYjQxZjkwZGY0NGU4ZjI5OTYxNzJiNjI5ODJmNjdlMTk2YTk5Iiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTY0NTg1NDEyMn0.ojY7aFNws34Qx2wj7NVdQjJZ-9B_0E4i1qg-jm34XnA");
        model.addAttribute("token", "access");
        return "admin_management";
    }

    /* 매니저 관리 */
    @GetMapping("/admin/manager")
    public String managerPage(Model model) {
        List<Board> boardList = boardService.findAllBoard();
        model.addAttribute("boardList", boardList);
        return "manager_management";
    }

    /* 게시판 관리 */
    @GetMapping("/admin/board")
    public String boardPage(Model model) {
        List<Board> boardList = boardService.findAllBoard();
        model.addAttribute("boardList", boardList);
        return "board_management";
    }

    /* 게시글 관리 */
    @GetMapping("/admin/post")
    public String PostPage(Model model) {
        /* 차단된 게시글 조회 */
        Pageable pageable = Pageable.unpaged();
        Page<Post> blockedList = postService.findBlocked(pageable);
        /* 신고된 게시글 조회 */
        Page<PostBlame> blamedList = blameService.findAllPost(pageable);
        /* 삭제된 게시글 조회 */
        Page<Post> deletedList = postService.findDeleted(pageable);

        model.addAttribute("blockedList", blockedList.getContent());
        model.addAttribute("blamedList", blamedList.getContent());
        model.addAttribute("deletedList", deletedList.getContent());
        model.addAttribute("token", "access");
        return "post_management";
    }

    /* 댓글 관리 */
    @GetMapping("/admin/comment")
    public String commentPage(Model model) {
        /* 차단된 게시글 조회 */
        Pageable pageable = Pageable.unpaged();
        Page<Comment> blockedList = commentService.findBlocked(pageable);
        /* 신고된 게시글 조회 */
        Page<CommentBlame> blamedList = blameService.findAllComment(pageable);
        /* 삭제된 게시글 조회 */
        Page<Comment> deletedList = commentService.findDeleted(pageable);

        model.addAttribute("blockedList", blockedList.getContent());
        model.addAttribute("blamedList", blamedList.getContent());
        model.addAttribute("deletedList", deletedList.getContent());
        model.addAttribute("token", "access");
        return "comment_management";
    }

    @GetMapping("/admin")
    public String mainPage() {
        return "layout/admin";
    }
}
