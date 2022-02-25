package com.blind.api.domain.like.service;


import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.comment.dto.CommentResponseDTO;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Pageable;

public interface LikeService {
    public void PostLike(Post post, User user, Long num);
    public void CommentLike(Post post, Comment comment, User user, Long num);
    public void deleteByPost(Post post);
    public PostResponseDTO findLikePostByUserId(Long userId, Pageable pageable);
    public CommentResponseDTO findLikeCommentByUserId(Long userId, Pageable pageable);
    public boolean checkPostLike(Post post, User user);
    public boolean checkCommentLike(Comment comment, User user);
    }
