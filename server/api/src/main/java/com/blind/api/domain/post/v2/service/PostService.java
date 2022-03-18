package com.blind.api.domain.post.v2.service;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface PostService {
    Post save(Board board, User user, String title, String content, Boolean isImage);
    Post findById(Long postId);

    Page<Post> findAllByBoardId(Long boardId, User user, Pageable pageable);
    Page<Post> search(Long boardId, User user, String keyword, Pageable pageable);
    Page<Post> findPostByIdIn(User user, Pageable pageable);
    Page<Post> findLikePostByUserId(Long userId, Pageable pageable);
    Page<Post> findAllHot(Pageable pageable);
    Page<Post> findDeleted(Pageable pageable);
    Page<Post> findBlamed(Pageable pageable);
    Page<Post> findBlocked(Pageable pageable);

    void setHot(Post post);
    void setNotice(Post post);
    void updatePost(Post post, String title, String content, Boolean isImage);
    void updateComment(Long id, Long add);
    void updateLike(Long postId, Long add);
    void updateView(Long postId);
    void addBlameCnt(Long id);
    void deleteNotice(Post post);
    void deletePost(Post post);
    void delete(Post post, Integer type);
    void restorePost(Post post);
}
