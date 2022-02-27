package com.blind.api.web.management;

import com.blind.api.domain.admin.service.AdminService;
import com.blind.api.domain.blame.domain.CommentBlame;
import com.blind.api.domain.blame.domain.PostBlame;
import com.blind.api.domain.blame.service.BlameService;
import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.service.BoardService;
import com.blind.api.domain.comment.service.CommentService;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
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
import java.util.List;

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

    @GetMapping("/admin/admin")
    public String adminPage(Model model) {
        Pageable pageable = Pageable.unpaged();
        Page<User> userList = userService.findAll(pageable);
        model.addAttribute("user", userList);
        model.addAttribute("token", "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1N2NiMjI2YmViMTg5YTZlZWUxYzRlOGY3ZmYxYjQxZjkwZGY0NGU4ZjI5OTYxNzJiNjI5ODJmNjdlMTk2YTk5Iiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTY0NTg1NDEyMn0.ojY7aFNws34Qx2wj7NVdQjJZ-9B_0E4i1qg-jm34XnA");
        return "admin_management";
    }

    @GetMapping("/admin/manager")
    public String managerPage(Model model) {
        List<Board> boardList = boardService.findAllBoard();
        model.addAttribute("board", boardList);
        return "manager_management";
    }

    @GetMapping("/admin/board")
    public String boardPage(Model model) {
        List<Board> boardList = boardService.findAllBoard();
        model.addAttribute("board", boardList);
        return "board_management";
    }

    @GetMapping("/admin/post")
    public String PostPage(Model model) {
        Page<PostBlame> blameList = blameService.findAllPost(Pageable.unpaged());
        model.addAttribute("posts", blameList.getContent());
        return "post_management";
    }

    @GetMapping("/admin/comment")
    public String commentPage(Model model) {
        Page<CommentBlame> blames = blameService.findAllComment(Pageable.unpaged());
        model.addAttribute("comment", blames);
        return "comment_management";
    }

    @GetMapping("/admin")
    public String mainPage() {
        return "layout/admin";
    }
}
