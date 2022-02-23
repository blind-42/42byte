package com.blind.api.domain.comment.v1.controller;

import com.blind.api.domain.comment.v1.dto.CommentRequestDTO;
import com.blind.api.domain.comment.v1.dto.CommentResponseDTO;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.Map;

public interface CommentController {
    void saveComment(@RequestParam("boardId") @Positive (message = "{invalid.request}") Long boardId,
                            @RequestParam("postId") @Positive (message = "{invalid.request}") Long postId,
                            @RequestBody @Valid CommentRequestDTO requestDTO,
                            HttpServletRequest request);

    void updateComment(@RequestParam("commentId") @Positive (message = "{invalid.request}") Long commentId,
                              @RequestBody @Valid CommentRequestDTO requestDTO,
                              HttpServletRequest request);

    void deleteComment(@RequestParam("commentId") @Positive (message = "{invalid.request}") Long commentId,
                              HttpServletRequest request);

    CommentResponseDTO findCommentByUserId (@SortDefault.SortDefaults({@SortDefault(sort = "id", direction = Sort.Direction.DESC)}) Pageable pageable,
                                                   HttpServletRequest request);
}
