package com.blind.api.domain.post.v2.repository;

import com.blind.api.domain.post.v2.domain.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostRepository extends PagingAndSortingRepository<Post, Long> {

    @Query(nativeQuery = true, value = "select * from post where id not in (select post_id as id from post_blame where user_id = :userId) and board_id = :boardId and is_del = :isDel and blame_count < :blameCnt")
    Page<Post> findPostForUser(@Param("boardId") Long boardId, @Param("isDel") Integer isDel, @Param("blameCnt") Long BlameCnt, @Param("userId") Long userId, Pageable pageable);

    Page<Post> findAllByAuthorIdAndIsDelEquals(Long authorId, Integer isDel, Pageable pageable);
    @Query(nativeQuery = true, value = "select * from post where id not in (select post_id as id from post_blame where user_id = :userId) and board_id = :boardId and is_del = :isDel and blame_count < :blameCnt and title like %:keyword% or content like %:keyword%")
    Page<Post> findPostsWithKeywordByBoard(@Param("boardId") Long boardId, @Param("isDel") Integer isDel, @Param("blameCnt") Long BlameCnt, @Param("userId") Long userId, @Param(value = "keyword")String keyword, Pageable pageable);

    @Query(nativeQuery = true, value = "select * from post where id not in (select post_id as id from post_blame where user_id = :userId) and is_del = :isDel and blame_count < :blameCnt and title like %:keyword% or content like %:keyword%")
    Page<Post> findPostsWithKeyword(@Param("isDel") Integer isDel, @Param("blameCnt") Long BlameCnt, @Param("userId") Long userId, @Param(value = "keyword")String keyword, Pageable pageable);

    @Modifying
    @Query("update Post p set p.viewCnt = p.viewCnt + 1 where p.id = :id")
    void updateView(@Param("id") Long id);

    @Modifying
    @Query("update Post p set p.likeCnt = p.likeCnt + :add where p.id = :id")
    void updateLike(@Param("id") Long id, @Param("add") Long add);

    @Modifying
    @Query("update Post p set p.commentCnt = p.commentCnt + :add where p.id = :id")
    void updateComment(@Param("id") Long id, @Param("add") Long add);

    @Modifying
    @Query("update Post p set p.blameCnt = p.blameCnt + 1L where p.id = :id")
    void addBlameCnt(@Param("id") Long id);

    Page<Post> findAllByIsDelEquals(Integer isDel, Pageable pageable);
    Page<Post> findAllByBlameCntGreaterThanEqual(Long blameCnt, Pageable pageable);
    Page<Post> findAllByBlameCntGreaterThanEqualOrIsDelGreaterThanEqual(Long blameCnt, Integer isDel, Pageable pageable);
}
