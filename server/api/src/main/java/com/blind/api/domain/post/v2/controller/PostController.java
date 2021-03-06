package com.blind.api.domain.post.v2.controller;

import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.dto.PostDetailDTO;
import com.blind.api.domain.post.v2.dto.PostRequestDTO;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;
import java.util.Map;

public interface PostController {
    Post savePost(@RequestParam @Positive (message = "{invalid.request}") Long boardId,
                  @RequestBody @Valid PostRequestDTO requestDTO,
                  HttpServletRequest request);

    PostDetailDTO findPostDetailByPostId (@RequestParam("postId") @Positive (message = "{invalid.request}") Long postId,
                                          HttpServletRequest request);

    PostResponseDTO findAllPost(@RequestParam("boardId") @Positive (message = "{invalid.request}") Long boardId,
                                @SortDefault.SortDefaults({
                                        @SortDefault(sort = "is_notice", direction = Sort.Direction.DESC),
                                        @SortDefault(sort = "id", direction = Sort.Direction.DESC)}) Pageable pageable, HttpServletRequest request);

    /*?????????????sort 변수명이 신기해요ㅠㅠ*/
    PostResponseDTO findHotPost(@SortDefault(sort = "hotDateTime", direction = Sort.Direction.DESC) Pageable pageable,
                                HttpServletRequest request);

    PostResponseDTO searchPost(@RequestParam("boardId") @PositiveOrZero(message = "{invalid.request}") Long boardId, @RequestParam("keyword") @Length (min = 1, max= 255, message = "{invalid.request}") String keyword,
                               @SortDefault.SortDefaults({
                                       @SortDefault(sort = "is_notice", direction = Sort.Direction.DESC),
                                       @SortDefault(sort = "id", direction = Sort.Direction.DESC)}) Pageable pageable, HttpServletRequest request);

    PostResponseDTO findPostByUserId (@SortDefault.SortDefaults({@SortDefault(sort = "id", direction = Sort.Direction.DESC)}) Pageable pageable,
                                      HttpServletRequest request);

    void updatePost(@RequestParam @Positive (message = "{invalid.request}") Long postId,
                    @RequestBody @Valid PostRequestDTO requestDTO,
                    HttpServletRequest request);

    void deletePost(@RequestParam @Positive (message = "{invalid.request}") Long postId,
                    HttpServletRequest request);

    void setNotice(@RequestParam @Positive (message = "{invalid.request}") Long postId,
                   HttpServletRequest request);
}
