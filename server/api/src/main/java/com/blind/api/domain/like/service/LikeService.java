package com.blind.api.domain.like.service;


import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.comment.dto.CommentResponseDTO;
import com.blind.api.domain.like.domain.CommentLike;
import com.blind.api.domain.like.domain.PostLike;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface LikeService {
    public void PostLike(Post post, User user, Long num);
    public void CommentLike(Post post, Comment comment, User user, Long num);
    public void deleteByPost(Post post);
    public Page<PostLike> findLikePostByUserId(Long userId, Pageable pageable);
    public Page<CommentLike> findLikeCommentByUserId(Long userId, Pageable pageable);
    public boolean checkPostLike(Post post, User user);
    public boolean checkCommentLike(Comment comment, User user);
    public List<CommentLike> getCommentLikeInPost(Post post, User user);

    }
