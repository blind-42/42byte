package com.blind.api.domain.board.v1.service;


import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.post.v2.domain.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface BoardService {
    Board save(String name);
    Optional<Board> findById(Long boardId);
}
