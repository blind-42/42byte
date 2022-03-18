package com.blind.api.domain.comment.service;

import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.comment.dto.CommentResponseDTO;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentService {
    Comment save(Long boardId, Post post, User user, String content);
    Comment findCommentById(Long id);

    List<Comment> findAllComment(Long postId);
    List<Comment> findByPostAndUser(Long postId, Long userId);

    Page<Comment> findCommentByUser(Long userId, Pageable pageable);
    Page<Comment> findLikeCommentByUserId(Long userId, Pageable pageable);

    Page<Comment> findDeleted(Pageable pageable);
    Page<Comment> findBlamed(Pageable pageable);
    Page<Comment> findBlocked(Pageable pageable);

    void update(Comment comment, String content);
    /*일반삭제(isDel 변경)*/
    void delete(Comment comment, Integer type);
    /*영구삭제*/
    void deleteComment(Comment comment);
    void deleteCommentByPostId(Long postId);
    void updateLike(Long id, Long add);
    void addBlameCnt(Long id);
    void restoreComment(Comment comment);
}