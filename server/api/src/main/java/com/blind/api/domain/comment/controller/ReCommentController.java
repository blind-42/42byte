package com.blind.api.domain.comment.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;

public interface ReCommentController {
    void createReComment(@RequestParam(value = "commentId")Long targetCmmtId, @RequestBody String content, HttpServletRequest request);
}
