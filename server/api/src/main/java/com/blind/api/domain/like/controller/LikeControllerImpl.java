package com.blind.api.domain.like.controller;

import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.comment.dto.CommentDTO;
import com.blind.api.domain.comment.dto.CommentResponseDTO;
import com.blind.api.domain.comment.service.CommentService;
import com.blind.api.domain.like.domain.CommentLike;
import com.blind.api.domain.like.domain.PostLike;
import com.blind.api.domain.like.service.LikeService;
import com.blind.api.domain.notification.service.NotificationService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.dto.PostDTO;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.service.UserService;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;

@RestController
@AllArgsConstructor
public class LikeControllerImpl implements LikeController {
    private final LikeService likeService;
    private final TokenService tokenService;
    private final PostService postService;
    private final CommentService commentService;
    private final NotificationService notificationService;
    private final UserService userService;

    @RequestMapping(value = {"/post/like"}, method=RequestMethod.POST)
    public void postLike(Long postId, HttpServletRequest request){
        Post post = postService.findById(postId);
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        if (likeService.checkPostLike(post, user) == false) {
            likeService.PostLike(post, user, 0L);
            postService.updateLike(post.getId(), 1L);
        }
        else{
            likeService.PostLike(post, user, 1L);
            postService.updateLike(post.getId(), -1L);
        }
        if (post.getLikeCnt() >= 9 && post.getHotDateTime() == null) {
            notificationService.save(user, post, "post", post.getTitle(), "Hot 게시물 선정");
            userService.setCheck(userService.findById(post.getAuthorId()));
            postService.setHot(post);
        }
    }

    @RequestMapping(value = {"/comment/like"}, method=RequestMethod.POST)
    public void commentLike(Long postId, Long commentId, HttpServletRequest request){
        Comment comment = commentService.findCommentById(commentId);
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        if (likeService.checkCommentLike(comment, user) == false) {
            likeService.CommentLike(comment.getPost(), comment, user, 0L);
            commentService.updateLike(comment.getId(), 1L);
        } else {
            likeService.CommentLike(comment.getPost(), comment, user, 1L);
            commentService.updateLike(comment.getId(), -1L);
        }
    }

    @RequestMapping(value = {"mypage/post/like"}, method=RequestMethod.GET)
    public PostResponseDTO myPostLike(Pageable pageable, HttpServletRequest request){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Page<Post> posts = postService.findLikePostByUserId(user.getId(), pageable);
        PostResponseDTO responseDTO = new PostResponseDTO();
        posts.stream().forEach( post -> {
            responseDTO.getContents().add(PostDTO.from(post, user.getRoleType()));
        });
        responseDTO.setPage(posts.getPageable().getPageNumber());
        responseDTO.setPages(posts.getTotalPages());
        return responseDTO;
    }

    @RequestMapping(value = {"mypage/comment/like"}, method=RequestMethod.GET)
    public CommentResponseDTO myCommentLike(Pageable pageable, HttpServletRequest request){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Page<Comment> likeList = commentService.findLikeCommentByUserId(user.getId(), pageable);
        CommentResponseDTO dto = new CommentResponseDTO();
        likeList.stream().forEach( comment -> {
            dto.getContents().add(CommentDTO.from(comment));
        });
        dto.setPage(likeList.getPageable().getPageNumber());
        dto.setPages(likeList.getTotalPages());
        return dto;
    }
}
