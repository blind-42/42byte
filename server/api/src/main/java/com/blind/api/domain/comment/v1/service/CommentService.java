package com.blind.api.domain.comment.v1.service;

import com.blind.api.domain.comment.v1.domain.Comment;

import java.util.List;

public interface CommentService {
    Comment save(Long boardId, Long postId, String content, String token);
    Comment update(Long commentId, String content);
    List<Comment> findAllComment(Long boardId, Long postId);
    void delete(Long commentId);
    public void updateLike(Long id, Long add);

}
