package com.blind.api.domain.like.service;


import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.comment.v1.dto.CommentResponseDTO;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface LikeService {
    public void PostLike(Long postId, String token);
    public void CommentLike(Long postId,Long commentId, String token);
    public void deleteByPost(Post post);
    public PostResponseDTO findLikePostByUserId(Long userId, Pageable pageable);
    public CommentResponseDTO findLikeCommentByUserId(Long userId, Pageable pageable);
    public boolean checkPostLike(Post post, User user);
    public boolean checkCommentLike(Comment comment, User user);
    }
