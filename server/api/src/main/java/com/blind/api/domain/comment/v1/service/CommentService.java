package com.blind.api.domain.comment.v1.service;

import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.post.v2.domain.Post;

import java.util.List;

public interface CommentService {
    Comment save(Long boardId, Long postId, String content, String token);
    Comment update(Comment comment, String content);
    List<Comment> findAllComment(Long boardId, Long postId);
    void delete(Comment comment);
    void deleteCommentByPostId(Long postId);
    public void updateLike(Long id, Long add);
}
