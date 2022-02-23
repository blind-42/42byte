package com.blind.api.domain.like.controller;

import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.comment.v1.dto.CommentResponseDTO;
import com.blind.api.domain.comment.v1.service.CommentService;
import com.blind.api.domain.like.service.LikeService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@AllArgsConstructor
public class LikeController {
    private final LikeService likeService;
    private final TokenService tokenService;
    private final PostService postService;
    private final CommentService commentService;

    @RequestMapping(value = {"/post/like"}, method=RequestMethod.POST)
    public void postLike(@RequestParam("postId") Long postId, HttpServletRequest request){
        Post post = postService.findById(postId);
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        likeService.PostLike(post, user);
    }

    @RequestMapping(value = {"/comment/like"}, method=RequestMethod.POST)
    public void commentLike(@RequestParam("postId") Long postId, @RequestParam("commentId") Long commentId, HttpServletRequest request){
        Comment comment = commentService.findCommentById(commentId);
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        likeService.CommentLike(comment.getPost(), comment, user);
    }

    @RequestMapping(value = {"mypage/post/like"}, method=RequestMethod.GET)
    public PostResponseDTO myPostLike(HttpServletRequest request,
                                      @SortDefault.SortDefaults({
                                              @SortDefault(sort = "post.isNotice", direction = Sort.Direction.DESC),
                                              @SortDefault(sort = "post.id", direction = Sort.Direction.DESC)}) Pageable pageable){
        Long userId = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request)).getId();
        return likeService.findLikePostByUserId(userId, pageable);
    }

    @RequestMapping(value = {"mypage/comment/like"}, method=RequestMethod.GET)
    public CommentResponseDTO myCommentLike(HttpServletRequest request,
                                            @SortDefault.SortDefaults({
                                                    @SortDefault(sort = "post.isNotice", direction = Sort.Direction.DESC),
                                                    @SortDefault(sort = "post.id", direction = Sort.Direction.DESC)}) Pageable pageable){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        return likeService.findLikeCommentByUserId(user.getId(), pageable);
    }
}
