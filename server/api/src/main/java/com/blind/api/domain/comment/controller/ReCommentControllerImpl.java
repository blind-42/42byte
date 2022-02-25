package com.blind.api.domain.comment.controller;

import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.comment.service.CommentService;
import com.blind.api.domain.comment.service.ReCommentService;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@AllArgsConstructor
public class ReCommentControllerImpl implements ReCommentController {
    private final ReCommentService reCommentService;
    private final CommentService commentService;
    private final TokenService tokenService;

    @RequestMapping(value = "/recomment" , method = RequestMethod.POST)
    public void createReComment(Long targetCmmtId, String content, HttpServletRequest request){
        Comment targetCmmt = commentService.findCommentById(targetCmmtId);
        Comment rootCmmt = targetCmmt;
        while (rootCmmt.getRootCommentId() != null)
            rootCmmt = commentService.findCommentById(rootCmmt.getRootCommentId());
        Long userId = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request)).getId();
        Long rootCmmtId = rootCmmt.getId();
        reCommentService.save(targetCmmt, rootCmmtId, userId, content);
    }
}
