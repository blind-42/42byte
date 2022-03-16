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
    List<Comment> findAllByPostId(Long postId);
    Page<Comment> findCommentByAuthorIdAndIsDelEqualsAndBlameCntLessThan(Long userId, Integer isDel, Long blameCnt, Pageable pageable);
    void deleteCommentByPostId(Long postId);
    @Modifying
    @Query("update Comment p set p.likeCnt = p.likeCnt + :add where p.id = :id")
    void updateLike(@Param("id") Long id, @Param("add") Long add);
    Optional<Comment> findCommentById(Long id);
    Page<Comment> findAllByPost(Post post, Pageable pageable);

    @Modifying
    @Query("update Comment p set p.blameCnt = p.blameCnt + 1L where p.id = :id")
    void addBlameCnt(@Param("id") Long id);

    Page<Comment> findAllByIsDelEquals(Integer isDel, Pageable pageable);
    Page<Comment> findAllByBlameCntGreaterThanEqual(Long blameCnt, Pageable pageable);
    Page<Comment> findAllByBlameCntGreaterThanEqualOrIsDelGreaterThanEqual(Long blameCnt, Integer isDel, Pageable pageable);


    @Query(nativeQuery = true, value = "select * from comment where post_id=:postId and id not in (select comment_id as id from comment_like where user_id = :userId)")
    List<Comment> findByPostIdAndUserId(@Param("postId") Long postId, @Param("userId") Long userId);

    @Query(nativeQuery = true, value = "select * from post where id in (select post_id as id from post_like where user_id = :userId) and is_del = 0 and blame_count < 5")
    Page<Comment> findAllCommentLikeByUserId(@Param("userId") Long userId, Pageable pageable);
}
