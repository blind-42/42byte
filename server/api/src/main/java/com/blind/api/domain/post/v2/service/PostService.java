package com.blind.api.domain.post.v2.service;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PostService {
    PostResponseDTO findAllByBoardId(Long boardId, Pageable pageable);
    Post findById(Long postId);
    Page<Post> findAllByAuthorId(Long authorId, Pageable pageable);
    Post save(Board board, User user, String title, String content);
    Page<Post> search(String keyword, Pageable pageable);
    void updateLike(Long postId, Long add);
    void updateView(Long postId);
    void updatePost(Post post, String title, String content);
    void deletePost(Post post);
    PostResponseDTO findPostByIdIn(Long userId, Pageable pageable);
    void updateComment(Long id, Long add);
    void addBlameCnt(Long id);


}
