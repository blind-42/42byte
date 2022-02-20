package com.blind.api.domain.comment.v1.controller;

import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.comment.v1.dto.CommentDTO;
import com.blind.api.domain.comment.v1.dto.CommentResponseDTO;
import com.blind.api.domain.comment.v1.repository.CommentRepository;
import com.blind.api.domain.comment.v1.service.CommentService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.repository.PostRepository;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.user.v2.service.UserService;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
@AllArgsConstructor
public class CommentController {
    private final CommentService commentService;
    private final PostService postService;
    private final CommentRepository commentRepository;
    private final UserService userService;

    @RequestMapping(value={"/comment"}, method=RequestMethod.POST)
    public void saveComment(@RequestParam("boardId") Long boardId, @RequestParam("postId") Long postId, @RequestBody Map<String,Object> body, HttpServletRequest request){
        commentService.save(boardId, postId, (String)body.get("content"), HeaderUtil.getAccessToken(request));
        postService.updateComment(postId, 1L);
    }

    @RequestMapping(value={"/comment"}, method = RequestMethod.PUT)
    public void updateComment(@RequestBody Map<String,String> query, @RequestParam("commentId") Long commentId, HttpServletRequest request){
        Comment comment = commentService.findCommentById(commentId);
        if (userService.compareUser(comment.getAuthorId(), HeaderUtil.getAccessToken(request)) != true)
            return ;
        commentService.update(comment, query.get("content"));
    }

    @RequestMapping(value={"/comment"}, method = RequestMethod.DELETE)
    public void deleteComment(@RequestParam("commentId") Long commentId, HttpServletRequest request){
        Comment comment = commentRepository.findById(commentId).orElseThrow(RuntimeException::new);
        if (userService.compareUser(comment.getAuthorId(), HeaderUtil.getAccessToken(request)) != true)
            return ;
        commentService.delete(comment);
        postService.updateComment(commentService.findCommentById(commentId).getPost().getId(), -1L);
    }

    @RequestMapping(value={"/mypage/comment"}, method = RequestMethod.GET)
    public CommentResponseDTO findCommentByUserId (HttpServletRequest request,
                                                   @SortDefault.SortDefaults({
                                                           @SortDefault(sort = "id", direction = Sort.Direction.DESC)}) Pageable pageable){
        String accessToken = HeaderUtil.getAccessToken(request);
        Long userId = userService.findByAccessToken(accessToken).orElseThrow().getId();
        return commentService.findCommentByIdIn(userId, pageable);
    }
}
