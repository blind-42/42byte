package com.blind.api.domain.blame.controller;

import com.blind.api.domain.blame.dto.BlameResponseDTO;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.Map;

public interface BlameController {
    public void postBlame(@RequestParam("postId") @Positive(message = "{invalid.request}") Long postId, @RequestBody @NotNull(message = "{invalid.request.NotNull}") String reason, HttpServletRequest request);
    public void commentBlame(@RequestParam("commentId") @Positive(message = "{invalid.request}") Long commentId, @RequestBody @NotNull(message = "{invalid.request.NotNull}") String reason, HttpServletRequest request);

}
