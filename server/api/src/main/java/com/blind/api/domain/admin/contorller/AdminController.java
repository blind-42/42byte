package com.blind.api.domain.admin.contorller;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.comment.dto.CommentResponseDTO;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
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
    Page<User> allUsers(HttpServletRequest request, @SortDefault.SortDefaults({@SortDefault(sort = "id", direction = Sort.Direction.DESC)}) Pageable pageable);
    CommentResponseDTO blamedComment(HttpServletRequest request, @SortDefault.SortDefaults({@SortDefault(sort = "id", direction = Sort.Direction.DESC)}) Pageable pageable);
    CommentResponseDTO deletedComment(HttpServletRequest request, @SortDefault.SortDefaults({@SortDefault(sort = "id", direction = Sort.Direction.DESC)}) Pageable pageable);
    PostResponseDTO blamedPost(HttpServletRequest request, @SortDefault.SortDefaults({@SortDefault(sort = "id", direction = Sort.Direction.DESC)}) Pageable pageable);
    PostResponseDTO deletedPost(HttpServletRequest request, @SortDefault.SortDefaults({@SortDefault(sort = "id", direction = Sort.Direction.DESC)}) Pageable pageable);
    PostResponseDTO blockedPost(HttpServletRequest request, @SortDefault.SortDefaults({@SortDefault(sort = "id", direction = Sort.Direction.DESC)}) Pageable pageable);
    CommentResponseDTO blockedComment(HttpServletRequest request, @SortDefault.SortDefaults({@SortDefault(sort = "id", direction = Sort.Direction.DESC)}) Pageable pageable);
    void restoreComment(@RequestParam @Positive (message = "{invalid.request}") Long commentId, HttpServletRequest request);
    void restorePost(@RequestParam @Positive (message = "{invalid.request}") Long postId, HttpServletRequest request);
}
