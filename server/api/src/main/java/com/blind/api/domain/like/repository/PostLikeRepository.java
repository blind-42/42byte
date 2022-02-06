package com.blind.api.domain.like.repository;

import com.blind.api.domain.like.domain.PostLike;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PostLikeRepository extends JpaRepository<PostLike, Long> {
    PostLike findByPostAndUser(Post post, User user);
    Long countByPost(Post post);
    void deleteByPostAndUser(Post post, User user);
}
