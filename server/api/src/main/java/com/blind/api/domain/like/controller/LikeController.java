package com.blind.api.domain.like.controller;

import com.blind.api.domain.comment.dto.CommentResponseDTO;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.validation.constraints.Positive;

public interface LikeController {
    public void postLike(@RequestParam("postId") @Positive (message = "{invalid.request}") Long postId, HttpServletRequest request);

    public void commentLike(@RequestParam("postId") @Positive (message = "{invalid.request}") Long postId, @RequestParam("commentId") Long commentId, HttpServletRequest request);

    public PostResponseDTO myPostLike(@SortDefault.SortDefaults({
                                              @SortDefault(sort = "post.isNotice", direction = Sort.Direction.DESC),
                                              @SortDefault(sort = "post.id", direction = Sort.Direction.DESC)}) Pageable pageable,
                                      HttpServletRequest request);

    public CommentResponseDTO myCommentLike(@SortDefault.SortDefaults({
                                                    @SortDefault(sort = "post.isNotice", direction = Sort.Direction.DESC),
                                                    @SortDefault(sort = "post.id", direction = Sort.Direction.DESC)}) Pageable pageable,
                                            HttpServletRequest request);
}
