package com.blind.api.domain.admin.contorller;

import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.validation.constraints.Positive;

public interface AdminController {
    void setAdmin(@RequestParam @Positive(message = "{invalid.request}") Long targetUserId, HttpServletRequest request);
    void deleteAdmin(@RequestParam @Positive (message = "{invalid.request}") Long targetUserId, HttpServletRequest request);
    void setManager(@RequestParam @Positive (message = "{invalid.request}") Long boardId, @RequestParam @Positive (message = "{invalid.request}") Long targetUserId, HttpServletRequest request);
    void deleteManager(@RequestParam @Positive (message = "{invalid.request}") Long boardId, HttpServletRequest request);
    void deleteBoard(@RequestParam @Positive (message = "{invalid.request}") Long boardId, HttpServletRequest request);
    void deletePost(@RequestParam @Positive (message = "{invalid.request}") Long postId, HttpServletRequest request);
    void deleteComment(@RequestParam @Positive (message = "{invalid.request}") Long commentId, HttpServletRequest request);
}
