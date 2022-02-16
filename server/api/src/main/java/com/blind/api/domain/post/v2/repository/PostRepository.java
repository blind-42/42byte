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
    Page<Post> findAllByBoardId(Long boardId, Pageable pageable);
    Page<Post> findAllByAuthorId(Long authorId, Pageable pageable);
    @Query(
            value = "SELECT p FROM Post p WHERE p.title LIKE %:keyword% OR p.content LIKE %:keyword%",
            countQuery = "SELECT COUNT(p.id) FROM Post p WHERE p.title LIKE %:keyword% OR p.content LIKE %:keyword%"
    )
    Page<Post> findPostsWithKeyword(@Param(value = "keyword")String keyword, Pageable pageable);

    @Modifying
    @Query("update Post p set p.viewCnt = p.viewCnt + 1 where p.id = :id")
    void updateView(@Param("id") Long id);

    @Modifying
    @Query("update Post p set p.likeCnt = p.likeCnt + :add where p.id = :id")
    void updateLike(@Param("id") Long id, @Param("add") Long add);

    Page<Post> findPostByIdIn(List<Long> ids, Pageable pageable);
}
