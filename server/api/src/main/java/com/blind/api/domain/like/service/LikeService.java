package com.blind.api.domain.like.service;


import com.blind.api.domain.post.v2.domain.Post;

public interface LikeService {
    public void PostLike(Long postId, String token);
    public void CommentLike(Long postId,Long commentId, String token);
    public void deleteByPost(Post post);
    }
