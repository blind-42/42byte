package com.blind.api.domain.admin.contorller;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.service.BoardService;
import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.comment.service.CommentService;
import com.blind.api.domain.like.service.LikeService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.service.UserService;
import com.blind.api.global.exception.BusinessException;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
@AllArgsConstructor
public class AdminControllerImpl implements AdminController{
    private final TokenService tokenService;
    private final UserService userService;
    private final BoardService boardService;
    private final PostService postService;
    private final CommentService commentService;
    private final LikeService likeService;

    /* 관리자 등록 */
    @RequestMapping(value = "/admin/user", method = RequestMethod.POST)
    public void setAdmin(Long targetUserId, HttpServletRequest request) {
        if (!isAdmin(request))
            throw new BusinessException("{invalid.request}");
        User targetUser = userService.findById(targetUserId);
        userService.setRoleType(targetUser, RoleType.ADMIN);
    }

    /* 관리자 제거 */
    @RequestMapping(value = "/admin/user", method = RequestMethod.DELETE)
    public void deleteAdmin(Long targetUserId, HttpServletRequest request){
        if (!isAdmin(request))
            throw new BusinessException("{invalid.request}");
        User targetUser = userService.findById(targetUserId);
        userService.setRoleType(targetUser, RoleType.USER);
    }

    /* 매니저 등록 */
    @RequestMapping(value = "/admin/manager", method = RequestMethod.POST)
    public void setManager(Long boardId, Long targetUserId, HttpServletRequest request){
        if (!isAdmin(request))
            throw new BusinessException("{invalid.request}");
        Board board = boardService.findById(boardId);
        User targetUser = userService.findById(targetUserId);
        boardService.setManager(board, targetUser);
    }

    /* 매니저 제거 */
    @RequestMapping(value = "/admin/manager", method = RequestMethod.DELETE)
    public void deleteManager(Long boardId, HttpServletRequest request) {
        if (!isAdmin(request))
            throw new BusinessException("{invalid.request}");
        Board board = boardService.findById(boardId);
        boardService.deleteManager(board);
    }

    /* 게시판 영구 삭제 */
    @RequestMapping(value = "/admin/board", method = RequestMethod.DELETE)
    public void deleteBoard(Long boardId, HttpServletRequest request){
        if (!isAdmin(request))
            throw new BusinessException("{invalid.request}");
        Board board = boardService.findById(boardId);
        boardService.deleteBoard(board);
    }

    /* 게시글 영구 삭제 */
    @RequestMapping(value = "/admin/post", method = RequestMethod.DELETE)
    public void deletePost(Long postId, HttpServletRequest request) {
        if (!isAdmin(request))
            throw new BusinessException("{invalid.request}");
        Post post = postService.findById(postId);
        likeService.deleteByPost(post);
        commentService.deleteCommentByPostId(postId);
        postService.deletePost(post);
    }

    /* 댓글 영구 삭제 */
    @RequestMapping(value = "/admin/comment", method = RequestMethod.DELETE)
    public void deleteComment(Long commentId, HttpServletRequest request) {
        if (!isAdmin(request))
            throw new BusinessException("{invalid.request}");
        Comment comment = commentService.findCommentById(commentId);
        commentService.deleteComment(comment);
    }

    private boolean isAdmin(HttpServletRequest request){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        RoleType userType = user.getRoleType();
        if (userType != RoleType.ADMIN)
            return false;
        return true;
    }
}
