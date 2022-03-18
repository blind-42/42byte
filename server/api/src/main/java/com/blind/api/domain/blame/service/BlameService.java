package com.blind.api.domain.blame.service;

import com.blind.api.domain.blame.domain.CommentBlame;
import com.blind.api.domain.blame.domain.PostBlame;
import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BlameService {
    void blamePost(Post post, User user, String reason);
    void blameComment(Comment comment, User user, String reason);

    Page<PostBlame> findAllPost(Pageable pageable);
    Page<CommentBlame> findAllComment(Pageable pageable);

    boolean checkPostBlame(Post post, User user);
    boolean checkCommentBlame(Comment comment, User user);
}
