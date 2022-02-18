package com.blind.api.domain.like.controller;

import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.comment.v1.dto.CommentResponseDTO;
import com.blind.api.domain.like.service.LikeService;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.service.UserService;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@AllArgsConstructor
public class LikeController {
    private final LikeService likeService;
    private final UserService userService;

    @RequestMapping(value = {"/post/like"}, method=RequestMethod.POST)
    public void postLike(@RequestParam("postId") Long postId, HttpServletRequest request){
        likeService.PostLike(postId, HeaderUtil.getAccessToken(request));
    }

    @RequestMapping(value = {"/comment/like"}, method=RequestMethod.POST)
    public void commentLike(@RequestParam("postId") Long postId, @RequestParam("commentId") Long commentId, HttpServletRequest request){
        likeService.CommentLike(postId, commentId, HeaderUtil.getAccessToken(request));
    }

    @RequestMapping(value = {"mypage/post/like"}, method=RequestMethod.GET)
    public PostResponseDTO myPostLike(HttpServletRequest request,
                                      @SortDefault.SortDefaults({
                                              @SortDefault(sort = "post.isNotice", direction = Sort.Direction.DESC),
                                              @SortDefault(sort = "post.id", direction = Sort.Direction.DESC)}) Pageable pageable){
        User user = userService.findByAccessToken(HeaderUtil.getAccessToken(request)).orElseThrow(RuntimeException::new);
        return likeService.findLikePostByUserId(user.getId(), pageable);
    }

    @RequestMapping(value = {"mypage/comment/like"}, method=RequestMethod.GET)
    public CommentResponseDTO myCommentLike(HttpServletRequest request,
                                            @PageableDefault(size = 24)
                                            @SortDefault.SortDefaults({
                                                    @SortDefault(sort = "post.isNotice", direction = Sort.Direction.DESC),
                                                    @SortDefault(sort = "post.id", direction = Sort.Direction.DESC)}) Pageable pageable){
        User user = userService.findByAccessToken(HeaderUtil.getAccessToken(request)).orElseThrow(RuntimeException::new);
        return likeService.findLikeCommentByUserId(user.getId(), pageable);
    }
}
