package com.blind.api.domain.post.v2.repository;

import com.blind.api.domain.post.v2.domain.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface PostRepository extends PagingAndSortingRepository<Post, Long> {
    public Page<Post> findAllByBoardId(Long boardId, Pageable pageable);

    @Modifying
    @Query("update Post p set p.viewCnt = p.viewCnt + 1 where p.id = :id")
    void updateView(@Param("id") Long id);

    @Modifying
    @Query("update Post p set p.likeCnt = p.likeCnt + :add where p.id = :id")
    void updateLike(@Param("id") Long id, @Param("add") Long add);
}
