package com.blind.api.domain.blame.service;

import com.blind.api.domain.blame.domain.CommentBlame;
import com.blind.api.domain.blame.domain.PostBlame;
import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Page;

import java.util.List;

public interface BlameService {
    public void blamePost(Post post, User user, String reason);
    public void blameComment(Comment comment, User user, String reason);
    public void deleteByPost(Post post);
    public boolean checkPostBlame(Post post, User user);
    public boolean checkCommentBlame(Comment comment, User user);
    public List<PostBlame> findAllPost();
    public List<CommentBlame> findAllComment();
}
