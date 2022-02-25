package com.blind.api.domain.comment.controller;

import com.blind.api.domain.comment.dto.CommentRequestDTO;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

public interface ReCommentController {
    void createReComment(@RequestParam(value = "commentId")Long targetCmmtId, @RequestBody @Valid CommentRequestDTO content, HttpServletRequest request);
}
