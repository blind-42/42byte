package com.blind.api.domain.blame.repository;

import com.blind.api.domain.blame.domain.CommentBlame;
import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentBlameRepository extends JpaRepository<CommentBlame, Long> {
    public CommentBlame findByCommentAndUser(Comment comment, User user);
    public Page<CommentBlame> findAll(Pageable pageable);
}
