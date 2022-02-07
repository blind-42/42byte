package com.blind.api.domain.post.v2.service;

import com.blind.api.domain.post.v2.domain.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.Optional;

public interface PostService {
    public Page<Post> findAllByBoardId(Long boardId, Pageable pageable);
    public Optional<Post> findById(Long postId);
    public Post save(Long boardId, String title, String content, String accessToken);
    Page<Post> search(String keyword, Pageable pageable);
    void updateLike(Long postId, Long add);
    void updateView(Long postId);
}
