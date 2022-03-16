package com.blind.api.domain.board.v1.repository;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {
    Optional<Board> findBoardByName(String name);
    Page<Board> findAll(Pageable pageable);
    Page<Board> findAllByIsDelGreaterThan(Integer isDel, Pageable pageable);
    Page<Board> findAllBoardByManager(User manager, Pageable pageable);

    @Modifying
    @Query("update Board p set p.viewId = p.viewId + 1 where p.id = :id")
    void addViewId(@Param("id") Long id);
}
