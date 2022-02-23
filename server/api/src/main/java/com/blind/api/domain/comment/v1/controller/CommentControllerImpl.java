package com.blind.api.domain.comment.v1.controller;

import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.comment.v1.dto.CommentRequestDTO;
import com.blind.api.domain.comment.v1.dto.CommentResponseDTO;
import com.blind.api.domain.comment.v1.service.CommentService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.service.UserService;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
@AllArgsConstructor
public class CommentControllerImpl implements CommentController {
    private final CommentService commentService;
    private final PostService postService;
    private final UserService userService;
    private final TokenService tokenService;

    @RequestMapping(value={"/comment"}, method=RequestMethod.POST)
    public void saveComment(Long boardId, Long postId, CommentRequestDTO requestDTO, HttpServletRequest request){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Post post = postService.findById(postId);
        commentService.save(boardId,post, user, requestDTO.getContent());
        postService.updateComment(postId, 1L);
    }

    @RequestMapping(value={"/comment"}, method = RequestMethod.PUT)
    public void updateComment(Long commentId, CommentRequestDTO requestDTO, HttpServletRequest request){
        Comment comment = commentService.findCommentById(commentId);
        Long userId = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request)).getId();
        if (!userId.equals(comment.getAuthorId()))
            return ;
        commentService.update(comment, requestDTO.getContent());
    }

    @RequestMapping(value={"/comment"}, method = RequestMethod.DELETE)
    public void deleteComment(Long commentId, HttpServletRequest request){
        Comment comment = commentService.findCommentById(commentId);
        Long userId = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request)).getId();
        if (!userId.equals(comment.getAuthorId()))
            return ;
        commentService.delete(comment);
        postService.updateComment(commentService.findCommentById(commentId).getPost().getId(), -1L);
    }

    @RequestMapping(value={"/mypage/comment"}, method = RequestMethod.GET)
    public CommentResponseDTO findCommentByUserId (Pageable pageable, HttpServletRequest request){
        Long userId = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request)).getId();
        return commentService.findCommentByIdIn(userId, pageable);
    }
}
