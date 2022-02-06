package com.blind.api.domain.post.v1.domain.repository;

import com.blind.api.domain.post.v1.domain.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<PostEntity, Long> {

    @Modifying
    @Query("update PostEntity p set p.viewCnt = p.viewCnt + 1 where p.postIdx = :postIdx")
    void updateView(@Param("postIdx") Long postIdx);
}
