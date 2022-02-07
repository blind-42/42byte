package com.blind.api.domain.comment.v1.controller;

import com.blind.api.domain.comment.v1.service.CommentService;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
@AllArgsConstructor
public class CommentController {
    private final CommentService commentService;

    @RequestMapping(value={"/board/{boardId}/{postId}"}, method=RequestMethod.POST)
    public Object saveComment(@PathVariable("boardId") Long boardId, @PathVariable("postId") Long postId, @RequestBody Map<String,String> body, HttpServletRequest request){
        return commentService.save(boardId, postId, body.get("content"), HeaderUtil.getAccessToken(request));
    }

    @RequestMapping(value={"/board/{boardId}/{postId}/{commentId}"}, method = RequestMethod.PUT)
    public Object updateComment(@PathVariable("boardId") Long boardId, @PathVariable("postId") Long postId, @RequestBody Map<String,String> body, Long commentId){
        return commentService.update(commentId, body.get("content"));
    }

    @RequestMapping(value={"/board/{boardId}/{postId}/{commentId}"}, method = RequestMethod.DELETE)
    public void deleteComment(@PathVariable("boardId") Long boardId, @PathVariable("postId") Long postId, Long commentId){
        commentService.delete(commentId);
    }
}
