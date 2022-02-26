package com.blind.api.domain.admin.contorller;

import com.blind.api.domain.board.v1.domain.Board;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.validation.constraints.Positive;
import java.util.List;

public interface AdminController {
    void setAdmin(@RequestParam(value = "userId") @Positive(message = "{invalid.request}") Long targetUserId, HttpServletRequest request);
    void deleteAdmin(@RequestParam(value = "userId") @Positive (message = "{invalid.request}") Long targetUserId, HttpServletRequest request);
    void setManager(@RequestParam @Positive (message = "{invalid.request}") Long boardId, @RequestParam(value = "userId") @Positive (message = "{invalid.request}") Long targetUserId, HttpServletRequest request);
    void deleteManager(@RequestParam @Positive (message = "{invalid.request}") Long boardId, HttpServletRequest request);
    void deleteBoard(@RequestParam @Positive (message = "{invalid.request}") Long boardId, HttpServletRequest request);
    void deletePost(@RequestParam @Positive (message = "{invalid.request}") Long postId, HttpServletRequest request);
    void deleteComment(@RequestParam @Positive (message = "{invalid.request}") Long commentId, HttpServletRequest request);
}
