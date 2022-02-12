package com.blind.api.domain.like.controller;

import com.blind.api.domain.like.service.LikeService;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@AllArgsConstructor
public class LikeController {
    private final LikeService likeService;

    @RequestMapping(value = {"/post/like"}, method=RequestMethod.POST)
    public void postLike(@RequestParam("postId") Long postId, HttpServletRequest request){
        likeService.PostLike(postId, HeaderUtil.getAccessToken(request));
    }

    @RequestMapping(value = {"/comment/like"}, method=RequestMethod.POST)
    public void commentLike(@RequestParam("postId") Long postId, @RequestParam("commentId") Long commentId, HttpServletRequest request){
        likeService.CommentLike(postId, commentId, HeaderUtil.getAccessToken(request));
    }
}
