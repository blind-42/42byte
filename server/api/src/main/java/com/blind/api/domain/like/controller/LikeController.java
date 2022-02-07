package com.blind.api.domain.like.controller;

import com.blind.api.domain.like.service.LikeService;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@AllArgsConstructor
public class LikeController {
    private final LikeService likeService;
    @RequestMapping(value = {"/board/{boardId}/{postId}/like"}, method=RequestMethod.POST)
    public void postLike(@PathVariable("postId") Long postId, HttpServletRequest request){
        likeService.PostLike(postId, HeaderUtil.getAccessToken(request));
    }
    @RequestMapping(value = {"/board/{boardId}/{postId}/{commentId}/like"}, method=RequestMethod.POST)
    public void commentLike(@PathVariable("commentId") Long commentId, HttpServletRequest request){
        likeService.CommentLike(commentId, HeaderUtil.getAccessToken(request));
    }
}
