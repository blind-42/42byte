package com.blind.api.domain.blame.repository;

import com.blind.api.domain.blame.domain.CommentBlame;
import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentBlameRepository extends JpaRepository<CommentBlame, Long> {
    public CommentBlame findByCommentAndUser(Comment comment, User user);
    public List<CommentBlame> findAllByComment(Comment comment);
}
