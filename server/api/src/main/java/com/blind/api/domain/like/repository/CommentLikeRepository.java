package com.blind.api.domain.like.repository;

import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.like.domain.CommentLike;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentLikeRepository extends JpaRepository<CommentLike, Long> {
    CommentLike findByCommentAndUser(Comment comment, User user);
    Long countByComment(Comment comment);
    void deleteByCommentAndUser(Comment comment, User user);
}
