package com.blind.api.domain.blame.controller;

import com.blind.api.domain.blame.domain.CommentBlame;
import com.blind.api.domain.blame.domain.PostBlame;
import com.blind.api.domain.blame.dto.BlameRequestDTO;
import com.blind.api.domain.blame.dto.BlameResponseDTO;
import com.blind.api.domain.blame.service.BlameService;
import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.comment.dto.ReCommentDTO;
import com.blind.api.domain.comment.service.CommentService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@AllArgsConstructor
@RestController
public class BlameControllerImpl implements BlameController{
    private final PostService postService;
    private final CommentService commentService;
    private final TokenService tokenService;
    private final BlameService blameService;

    /*게시글 신고*/
    @RequestMapping(value = {"/post/blame"}, method= RequestMethod.POST)
    public void postBlame(Long postId, BlameRequestDTO requestDTO, HttpServletRequest request) {
        Post post = postService.findById(postId);
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));

        if (blameService.checkPostBlame(post, user) == false) {
            blameService.blamePost(post, user, requestDTO.getIssue());
            postService.addBlameCnt(postId);
        }
    }

    /*댓글 신고*/
    @RequestMapping(value = {"/comment/blame"}, method= RequestMethod.POST)
    public void commentBlame(Long commentId, BlameRequestDTO requestDTO , HttpServletRequest request) {
        Comment comment = commentService.findCommentById(commentId);
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));

        if (blameService.checkCommentBlame(comment, user) == false) {
            blameService.blameComment(comment, user, requestDTO.getIssue());
            commentService.addBlameCnt(commentId);
        }
    }
}
