package com.blind.api.domain.board.v1.service;


import com.blind.api.domain.board.v1.domain.Board;

import java.util.Optional;

public interface BoardService {
    public Board save(String name);
    public Optional<Board> findById(Long boardId);
}
