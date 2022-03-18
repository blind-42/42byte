package com.blind.api.domain.blame.repository;

import com.blind.api.domain.blame.domain.PostBlame;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface PostBlameRepository extends JpaRepository<PostBlame, Long> {
    Page<PostBlame> findAll(Pageable pageable);
    PostBlame findByPostAndUser(Post post, User user);
}
