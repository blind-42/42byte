package com.blind.api.domain.blame.service;

import com.blind.api.domain.blame.domain.CommentBlame;
import com.blind.api.domain.blame.domain.PostBlame;
import com.blind.api.domain.blame.repository.CommentBlameRepository;
import com.blind.api.domain.blame.repository.PostBlameRepository;
import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@AllArgsConstructor
public class BlameServiceImpl implements BlameService{
    private final PostBlameRepository postBlameRepository;
    private final CommentBlameRepository commentBlameRepository;

    @Override
    @Transactional
    public void blamePost(Post post, User user, String reason) {
        postBlameRepository.save(new PostBlame(post, user, reason));
    }

    @Override
    @Transactional
    public void blameComment(Comment comment, User user, String reason) {
        commentBlameRepository.save(new CommentBlame(comment, user, reason));
    }

    @Override
    @Transactional
    public void deleteByPost(Post post) {
        postBlameRepository.deleteByPost(post);
    }

    @Override
    @Transactional
    public boolean checkPostBlame(Post post, User user) {
        return postBlameRepository.findByPostAndUser(post, user) != null ? true : false ;
    }

    @Override
    @Transactional
    public boolean checkCommentBlame(Comment comment, User user) {
        return commentBlameRepository.findByCommentAndUser(comment, user) != null ? true : false ;
    }

    @Override
    @Transactional
    public List<PostBlame> findAllPost() {
        return postBlameRepository.findAll();
    }

    @Override
    @Transactional
    public List<CommentBlame> findAllComment() {
        return commentBlameRepository.findAll();
    }
}
