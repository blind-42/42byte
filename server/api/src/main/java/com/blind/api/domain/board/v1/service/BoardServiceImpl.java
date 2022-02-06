package com.blind.api.domain.board.v1.service;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.repository.BoardRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class BoardServiceImpl implements BoardService{
    private final BoardRepository repository;
    @Override
    public Board save(String name){
        return repository.findBoardByName(name)
                .orElseGet(() -> repository.save(new Board(name)));
    }

    @Override
    public Optional<Board> findById(Long boardId) {
        return repository.findById(boardId);
    }
}
