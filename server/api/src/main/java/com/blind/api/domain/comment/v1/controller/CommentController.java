package com.blind.api.domain.comment.v1.controller;

import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.comment.v1.repository.CommentRepository;
import com.blind.api.domain.comment.v1.service.CommentService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.repository.PostRepository;
import com.blind.api.domain.user.v2.service.UserService;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
@AllArgsConstructor
public class CommentController {
    private final CommentService commentService;
    private final CommentRepository commentRepository;
    private final UserService userService;

    @RequestMapping(value={"/comment"}, method=RequestMethod.POST)
    public void saveComment(@RequestParam("boardId") Long boardId, @RequestParam("postId") Long postId, @RequestParam Map<String,Object> query, HttpServletRequest request){
        Comment comment = commentService.save(boardId, postId, (String)query.get("content"), HeaderUtil.getAccessToken(request));

    }

    @RequestMapping(value={"/comment"}, method = RequestMethod.PUT)
    public void updateComment(@RequestParam Map<String,String> query, @RequestParam("commentId") Long commentId, HttpServletRequest request){
        Comment comment = commentRepository.findById(commentId).orElseThrow(RuntimeException::new);
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
    }
}
