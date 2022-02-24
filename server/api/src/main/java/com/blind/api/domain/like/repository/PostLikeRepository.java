package com.blind.api.domain.like.repository;

import com.blind.api.domain.like.domain.PostLike;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostLikeRepository extends JpaRepository<PostLike, Long> {
    PostLike findByPostAndUser(Post post, User user);
    void deleteByPost(Post post);
    public void deleteByPostId(Long postId);
    void deleteByPostAndUser(Post post, User user);
    public Page<PostLike> findAllPostByUserId(Long userId, Pageable pageable);
}
