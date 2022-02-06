package com.blind.api.domain.like.service;

import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.comment.v1.repository.CommentRepository;
import com.blind.api.domain.like.domain.CommentLike;
import com.blind.api.domain.like.domain.PostLike;
import com.blind.api.domain.like.repository.CommentLikeRepository;
import com.blind.api.domain.like.repository.PostLikeRepository;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;

@Service
@AllArgsConstructor
public class LikeServiceImpl implements LikeService{
    private final CommentLikeRepository commentLikeRepository;
    private final PostLikeRepository postLikeRepository;
    private final UserService userService;
    private final PostService postService;
    private final CommentRepository commentService;

    @Override
    @Transactional
    public void PostLike(Long postId, String token) {
        Post post = postService.findById(postId).orElseThrow(RuntimeException::new);
        User user = userService.findByAccessToken(token).orElseThrow(RuntimeException::new);

        if (checkPostLike(post, user) == false) {
            postLikeRepository.save(new PostLike(post, user));
            postService.updateLike(post.getId(), 1L);
        } else {
            postLikeRepository.deleteByPostAndUser(post, user);
            postService.updateLike(post.getId(), -1L);
        }
    }

    @Override
    @Transactional
    public void CommentLike(Long commentId, String token) {
        User user = userService.findByAccessToken(token).orElseThrow(RuntimeException::new);
        Comment comment = commentService.findById(commentId).orElseThrow(RuntimeException::new);

        if (checkCommentLike(comment, user) == false) {
            commentLikeRepository.save(new CommentLike(comment, user));
            commentService.updateLike(comment.getId(), 1L);
        } else {
            commentLikeRepository.deleteByCommentAndUser(comment, user);
            commentService.updateLike(comment.getId(), -1L);
        }
    }

    private boolean checkPostLike(Post post, User user) {
        if(postLikeRepository.findByPostAndUser(post, user) != null)
            return true;
        else
            return false;
    }

    private boolean checkCommentLike(Comment comment, User user) {
        if(commentLikeRepository.findByCommentAndUser(comment, user) != null)
            return true;
        else
            return false;
    }
}
