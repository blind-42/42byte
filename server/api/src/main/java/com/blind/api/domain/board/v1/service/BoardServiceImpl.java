package com.blind.api.domain.board.v1.service;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.repository.BoardRepository;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.global.exception.BusinessException;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@AllArgsConstructor
public class BoardServiceImpl implements BoardService{
    private final BoardRepository boardRepository;
    @Override
    @Transactional
    public Board save(User manager, String name){
        return boardRepository.save(new Board(manager, name));
    }

    @Override
    @Transactional
    public void setManager(Board board, User user) {
        board.setManager(user);
    }

    @Override
    @Transactional
    public void deleteManager(Board board) {
        board.setManager(null);
    }


    @Override
    @Transactional
    public void delete(Board board, Integer type){
        board.setIsDel(type);
    }

    @Override
    @Transactional
    public void deleteBoard(Board board) {
        boardRepository.delete(board);
    }



    @Override
    @Transactional
    public Board findById(Long boardId) {
        return boardRepository.findById(boardId).orElseThrow(() -> new BusinessException("{board.notfound}"));
    }

    @Override
    @Transactional
    public Board findByName(String name) {
        return boardRepository.findBoardByName(name).orElseThrow(() -> new BusinessException("{board.notfound}"));
    }

    @Override
    @Transactional
    public List<Board> findAllBoard() {
        return boardRepository.findAll();
    }

}
