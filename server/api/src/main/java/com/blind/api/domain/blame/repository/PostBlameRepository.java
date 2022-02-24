package com.blind.api.domain.blame.repository;

import com.blind.api.domain.blame.domain.PostBlame;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostBlameRepository extends JpaRepository<PostBlame, Long> {
    public void deleteByPost(Post post);
    public List<PostBlame> findAllByPost(Post post);
    public PostBlame findByPostAndUser(Post post, User user);
}
