package com.blind.api.domain.comment.v1.service;

import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.comment.v1.dto.CommentResponseDTO;
import com.blind.api.domain.post.v2.domain.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CommentService {
    Comment save(Long boardId, Long postId, String content, String token);

    void update(Comment comment, String content);

    List<Comment> findAllComment(Long boardId, Long postId);

    void delete(Comment comment);

    void deleteCommentByPostId(Long postId);

    public Page<Comment> findCommentByAuthorId(Long userId, Pageable pageable);

    public void updateLike(Long id, Long add);

    public CommentResponseDTO findCommentByIdIn(Long userId, Pageable pageable);

    Comment findCommentById(Long id);

}