package com.blind.api.domain.like.repository;

import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.like.domain.CommentLike;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentLikeRepository extends JpaRepository<CommentLike, Long> {
    CommentLike findByCommentAndUser(Comment comment, User user);
    void deleteByPostId(Long postId);
    void deleteByCommentAndUser(Comment comment, User user);
    Page<CommentLike> findAllCommentByUserId(Long userId, Pageable pageable);
}
