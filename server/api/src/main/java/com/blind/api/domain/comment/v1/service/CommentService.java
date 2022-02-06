package com.blind.api.domain.comment.v1.service;

import com.blind.api.domain.comment.v1.domain.Comment;

import java.util.List;

public interface CommentService {
    public Comment save(Long boardId, Long postId, String content, String token);
    public Comment update(Long commentId, String content);
    public List<Comment> findAllComment(Long boardId, Long postId);
    public void delete(Long commentId);
}
