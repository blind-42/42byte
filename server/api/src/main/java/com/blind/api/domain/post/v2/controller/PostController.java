package com.blind.api.domain.post.v2.controller;

import com.blind.api.domain.post.v2.domain.Post;
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
import java.util.Map;

public interface PostController {
    Post savePost(@RequestParam @Positive (message = "{invalid.request}") Long boardId,
                  @RequestBody @Valid PostRequestDTO requestDTO,
                  HttpServletRequest request);

    void updatePost(@RequestParam @Positive (message = "{invalid.request}") Long postId,
                    @RequestBody @Valid PostRequestDTO requestDTO,
                    HttpServletRequest request);

    void deletePost(@RequestParam @Positive (message = "{invalid.request}") Long postId,
                    HttpServletRequest request);

    PostResponseDTO findAllPost(@RequestParam("boardId") @Positive (message = "{invalid.request}") Long boardId,
                                @SortDefault.SortDefaults({
                                        @SortDefault(sort = "isNotice", direction = Sort.Direction.DESC),
                                        @SortDefault(sort = "id", direction = Sort.Direction.DESC)}) Pageable pageable);

    PostResponseDTO searchPost(@RequestParam("keyword") @Length (min = 1, max= 3, message = "{invalid.request}") String keyword,
                               @SortDefault.SortDefaults({
                                       @SortDefault(sort = "isNotice", direction = Sort.Direction.DESC),
                                       @SortDefault(sort = "id", direction = Sort.Direction.DESC)}) Pageable pageable);

    PostResponseDTO findPostByUserId (@SortDefault.SortDefaults({@SortDefault(sort = "id", direction = Sort.Direction.DESC)}) Pageable pageable,
                                      HttpServletRequest request);

    Map<String, Object> findPostDetailByPostId (@RequestParam("boardId") @Positive (message = "{invalid.request}") Long boardId,
                                                @RequestParam("postId") @Positive (message = "{invalid.request}") Long postId,
                                                HttpServletRequest request);


}
