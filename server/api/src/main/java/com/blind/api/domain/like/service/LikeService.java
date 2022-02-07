package com.blind.api.domain.like.service;


public interface LikeService {
    public void PostLike(Long postId, String token);
    public void CommentLike(Long commentId, String token);
}
