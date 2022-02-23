package com.blind.api.domain.board.v1.service;


import com.blind.api.domain.board.v1.domain.Board;

import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

public interface BoardService {
    Board save(@Size(min = 2 , max = 255, message = "{invalid.request}") String name);
    Board findById(@Min(value = 1, message = "{invalid.request}") Long boardId);
    Board findByName(@Size(min = 2 , max = 255, message = "{invalid.request}") String name);
}
