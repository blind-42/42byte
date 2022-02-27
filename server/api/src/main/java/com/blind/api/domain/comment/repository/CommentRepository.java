package com.blind.api.domain.comment.repository;

import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.post.v2.domain.Post;
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

    @Modifying
    @Query("update Comment p set p.blameCnt = p.blameCnt + 1L where p.id = :id")
    void addBlameCnt(@Param("id") Long id);

    Page<Comment> findAllByIsDelGreaterThan(Integer isDel, Pageable pageable);
    Page<Comment> findAllByBlameCntGreaterThanEqual(Long blameCnt, Pageable pageable);
}
