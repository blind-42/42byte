package com.blind.api.domain.comment.v1.repository;

import com.blind.api.domain.comment.v1.domain.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findAllByBoardIdAndPostId(Long boardId, Long postId);
    Page<Comment> findCommentByAuthorId(Long userId, Pageable pageable);
    void deleteCommentByPostId(Long postId);
    @Modifying
    @Query("update Comment p set p.likeCnt = p.likeCnt + :add where p.id = :id")
    void updateLike(@Param("id") Long id, @Param("add") Long add);
    Optional<Comment> findCommentById(Long id);
}
