package com.blind.api.domain.comment.v1.controller;

import com.blind.api.domain.comment.v1.domain.Comment;
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
public class CommentController {
    private final CommentService commentService;
    private final PostService postService;
    private final UserService userService;
    private final TokenService tokenService;

    @RequestMapping(value={"/comment"}, method=RequestMethod.POST)
    public void saveComment(@RequestParam("boardId") Long boardId, @RequestParam("postId") Long postId, @RequestBody Map<String,String> body, HttpServletRequest request){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Post post = postService.findById(postId);
        commentService.save(boardId,post, user, body.get("content"));
        postService.updateComment(postId, 1L);
    }

    @RequestMapping(value={"/comment"}, method = RequestMethod.PUT)
    public void updateComment(@RequestParam("commentId") Long commentId, @RequestBody Map<String,String> query, HttpServletRequest request){
        Comment comment = commentService.findCommentById(commentId);
        Long userId = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request)).getId();
        if (!userId.equals(comment.getAuthorId()))
            return ;
        commentService.update(comment, query.get("content"));
    }

    @RequestMapping(value={"/comment"}, method = RequestMethod.DELETE)
    public void deleteComment(@RequestParam("commentId") Long commentId, HttpServletRequest request){
        Comment comment = commentService.findCommentById(commentId);
        Long userId = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request)).getId();
        if (!userId.equals(comment.getAuthorId()))
            return ;
        commentService.delete(comment);
        postService.updateComment(commentService.findCommentById(commentId).getPost().getId(), -1L);
    }

    @RequestMapping(value={"/mypage/comment"}, method = RequestMethod.GET)
    public CommentResponseDTO findCommentByUserId (HttpServletRequest request,
                                                   @SortDefault.SortDefaults({
                                                           @SortDefault(sort = "id", direction = Sort.Direction.DESC)}) Pageable pageable){
        Long userId = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request)).getId();
        return commentService.findCommentByIdIn(userId, pageable);
    }
}
