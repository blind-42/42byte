package com.blind.api.domain.like.service;

import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.comment.v1.dto.CommentDTO;
import com.blind.api.domain.comment.v1.dto.CommentResponseDTO;
import com.blind.api.domain.comment.v1.repository.CommentRepository;
import com.blind.api.domain.like.domain.CommentLike;
import com.blind.api.domain.like.domain.PostLike;
import com.blind.api.domain.like.repository.CommentLikeRepository;
import com.blind.api.domain.like.repository.PostLikeRepository;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.dto.PostDTO;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;

@Service
@AllArgsConstructor
public class LikeServiceImpl implements LikeService{
    private final CommentLikeRepository commentLikeRepository;
    private final PostLikeRepository postLikeRepository;

    @Override
    @Transactional
    public void PostLike(Post post, User user, Long num) {
        if (num == 0) {
            postLikeRepository.save(new PostLike(post, user));
        } else {
            postLikeRepository.deleteByPostAndUser(post, user);
        }
    }

    @Override
    @Transactional
    public void CommentLike(Post post, Comment comment, User user, Long num) {
        if (num == 0) {
            commentLikeRepository.save(new CommentLike(comment, post, user));
        } else {
            commentLikeRepository.deleteByCommentAndUser(comment, user);
      }
    }

    @Override
    @Transactional
    public boolean checkPostLike(Post post, User user) {
        return postLikeRepository.findByPostAndUser(post, user) != null ? true : false;
    }

    @Override
    @Transactional
    public boolean checkCommentLike(Comment comment, User user) {
        return commentLikeRepository.findByCommentAndUser(comment, user) != null ? true : false;
    }

    @Override
    @Transactional
    public void deleteByPost(Post post) {
        postLikeRepository.deleteByPostId(post.getId());
        commentLikeRepository.deleteByPostId(post.getId());
    }

    @Override
    @Transactional
    public PostResponseDTO findLikePostByUserId(Long userId, Pageable pageable){
        Page<PostLike> savePageable = postLikeRepository.findAllPostByUserId(userId, pageable);
        PostResponseDTO dto = new PostResponseDTO();
        savePageable.stream().forEach( postLike -> {
            dto.getContents().add(PostDTO.from(postLike.getPost()));
        });
        dto.setPage(savePageable.getPageable().getPageNumber());
        dto.setPages(savePageable.getTotalPages());
        return dto;
    }

    @Override
    @Transactional
    public CommentResponseDTO findLikeCommentByUserId(Long userId, Pageable pageable){
        Page<CommentLike> savePageable = commentLikeRepository.findAllCommentByUserId(userId, pageable);
        CommentResponseDTO dto = new CommentResponseDTO();
        savePageable.stream().forEach( commentLike -> {
            dto.getContents().add(CommentDTO.from(commentLike.getComment()));
        });
        dto.setPage(savePageable.getPageable().getPageNumber());
        dto.setPages(savePageable.getTotalPages());
        return dto;
    }
}
