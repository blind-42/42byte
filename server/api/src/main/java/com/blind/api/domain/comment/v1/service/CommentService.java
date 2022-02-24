package com.blind.api.domain.comment.v1.service;

import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.comment.v1.dto.CommentResponseDTO;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentService {
    Comment save(Long boardId, Post post, User user, String content);

    void update(Comment comment, String content);

    List<Comment> findAllComment(Long boardId, Long postId);

    void delete(Comment comment);

    void deleteCommentByPostId(Long postId);

    public Page<Comment> findCommentByAuthorId(Long userId, Pageable pageable);

    public void updateLike(Long id, Long add);

    public CommentResponseDTO findCommentByIdIn(Long userId, Pageable pageable);

    Comment findCommentById(Long id);

    void addBlameCnt(Long id);
}