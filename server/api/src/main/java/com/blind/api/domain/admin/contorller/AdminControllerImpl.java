package com.blind.api.domain.admin.contorller;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.dto.BoardDTO;
import com.blind.api.domain.board.v1.dto.BoardResponseDTO;
import com.blind.api.domain.board.v1.service.BoardService;
import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.comment.dto.CommentDTO;
import com.blind.api.domain.comment.dto.CommentResponseDTO;
import com.blind.api.domain.comment.service.CommentService;
import com.blind.api.domain.like.service.LikeService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.dto.PostDTO;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.service.UserService;
import com.blind.api.global.exception.BusinessException;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@AllArgsConstructor
public class AdminControllerImpl implements AdminController{
    private final TokenService tokenService;
    private final UserService userService;
    private final BoardService boardService;
    private final PostService postService;
    private final CommentService commentService;
    private final LikeService likeService;

    @RequestMapping(value = "/admin/user", method = RequestMethod.GET)
    public Page<User> allUsers(HttpServletRequest request, Pageable pageable) {
        if (!isAdmin(request))
            throw new BusinessException("{invalid.request}");
        return userService.findAll(pageable);
    }

    /* 관리자 등록 */
    @RequestMapping(value = "/admin/user", method = RequestMethod.POST)
    public void setAdmin(Long targetUserId, HttpServletRequest request) {
        if (!isAdmin(request))
            throw new BusinessException("{invalid.request}");
        User targetUser = userService.findById(targetUserId);
        userService.setRoleType(targetUser, RoleType.ADMIN);
    }

    /* 관리자 해제 */
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

    @RequestMapping(value = "/admin/deleted/post", method = RequestMethod.GET)
    public PostResponseDTO deletedPost(HttpServletRequest request, Pageable pageable) {
        if (!isAdmin(request))
            throw new BusinessException("{invalid.request}");
        PostResponseDTO dtoList = new PostResponseDTO<>();
        Page<Post> postList = postService.findDeleted(pageable);
        postList.stream().forEach( post -> {
            dtoList.getContents().add(PostDTO.from(post, RoleType.ADMIN));
        });
        dtoList.setPage(postList.getPageable().getPageNumber());
        dtoList.setPages(postList.getTotalPages());
        return dtoList;
    }

    @RequestMapping(value = "/admin/blamed/post", method = RequestMethod.GET)
    public PostResponseDTO blamedPost(HttpServletRequest request, Pageable pageable) {
        if (!isAdmin(request))
            throw new BusinessException("{invalid.request}");
        PostResponseDTO dtoList = new PostResponseDTO<>();
        Page<Post> postList = postService.findBlamed(pageable);
        postList.stream().forEach( post -> {
            dtoList.getContents().add(PostDTO.from(post, RoleType.ADMIN));
        });
        dtoList.setPage(postList.getPageable().getPageNumber());
        dtoList.setPages(postList.getTotalPages());
        return dtoList;
    }

    @RequestMapping(value = "/admin/deleted/comment", method = RequestMethod.GET)
    public CommentResponseDTO deletedComment(HttpServletRequest request, Pageable pageable) {
        if (!isAdmin(request))
            throw new BusinessException("{invalid.request}");
        CommentResponseDTO dtoList = new CommentResponseDTO();
        Page<Comment> commnetList = commentService.findDeleted(pageable);
        commnetList.stream().forEach( comment -> {
            dtoList.getContents().add(CommentDTO.from(comment));
        });
        dtoList.setPage(commnetList.getPageable().getPageNumber());
        dtoList.setPages(commnetList.getTotalPages());
        return dtoList;
    }

    @RequestMapping(value = "/admin/blamed/comment", method = RequestMethod.GET)
    public CommentResponseDTO blamedComment(HttpServletRequest request, Pageable pageable) {
        if (!isAdmin(request))
            throw new BusinessException("{invalid.request}");
        CommentResponseDTO dtoList = new CommentResponseDTO();
        Page<Comment> commnetList = commentService.findBlamed(pageable);
        commnetList.stream().forEach( comment -> {
            dtoList.getContents().add(CommentDTO.from(comment));
        });
        dtoList.setPage(commnetList.getPageable().getPageNumber());
        dtoList.setPages(commnetList.getTotalPages());
        return dtoList;
    }

    /* 게시판 영구 삭제 */
    @RequestMapping(value = "/admin/board", method = RequestMethod.DELETE)
    public void deleteBoard(Long boardId, HttpServletRequest request){
        if (!isAdmin(request))
            throw new BusinessException("{invalid.request}");
        Board board = boardService.findById(boardId);
        boardService.deleteBoard(board);
    }

    @RequestMapping(value = "/admin/deleted/board", method = RequestMethod.GET)
    public BoardResponseDTO deletedBoard(HttpServletRequest request, Pageable pageable) {
        if (!isAdmin(request))
            throw new BusinessException("{invalid.request}");
        BoardResponseDTO dtoList = new BoardResponseDTO();
        Page<Board> boardList = boardService.findDeleted(pageable);
        boardList.stream().forEach( board -> {
            dtoList.getContents().add(BoardDTO.from(board));
        });
        dtoList.setPage(boardList.getPageable().getPageNumber());
        dtoList.setPages(boardList.getTotalPages());
        return dtoList;
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
