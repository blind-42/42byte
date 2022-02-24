package com.blind.api.domain.board.v1.service;


import com.blind.api.domain.board.v1.domain.Board;

import javax.validation.constraints.Min;
import javax.validation.constraints.Size;
import java.util.List;

public interface BoardService {
    Board save (String name);
    Board findById (Long boardId);
    Board findByName (String name);
    List<Board> findAllBoard();
}
