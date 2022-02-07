package com.blind.api.domain.board.v1.service;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.repository.BoardRepository;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
        return boardRepository.findBoardByName(name)
                .orElseGet(() -> boardRepository.save(new Board(name)));
    }

    @Override
    @Transactional
    public Optional<Board> findById(Long boardId) {
        return boardRepository.findById(boardId);
    }
}
