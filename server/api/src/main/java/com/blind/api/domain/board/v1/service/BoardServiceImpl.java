package com.blind.api.domain.board.v1.service;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.repository.BoardRepository;
import com.blind.api.global.exception.ApiException;
import com.blind.api.global.exception.entity.ExceptionCode;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@AllArgsConstructor
public class BoardServiceImpl implements BoardService{
    private final BoardRepository boardRepository;
    @Override
    @Transactional
    public Board save(String name){
        return boardRepository.findBoardByName(name).orElseGet(() ->
                boardRepository.save(new Board(name)));
    }

    @Override
    @Transactional
    public Board findById(Long boardId) {
        return boardRepository.findById(boardId).orElseThrow(RuntimeException::new);
    }

    @Override
    @Transactional
    public Board findByName(String name) {
        return boardRepository.findBoardByName(name).orElseThrow(RuntimeException::new);
    }
}
