package com.blind.api.domain.board.v1.service;


import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.transaction.Transactional;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;
import java.util.List;

public interface BoardService {
    Board save (User manager, String name);
    Board findById (Long boardId);
    Board findByName (String name);
    void setManager(Board board, User user);
    void deleteManager(Board board);
    void delete (Board board, Integer type);
    List<Board> findAllBoard();
    void deleteBoard(Board board);
    Page<Board> findDeleted(Pageable pageable);
    Page<Board> findAllBoardByUser(User user, Pageable pageable);
}
