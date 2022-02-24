package com.blind.api.domain.blame.controller;

import com.blind.api.domain.blame.domain.CommentBlame;
import com.blind.api.domain.blame.domain.PostBlame;
import com.blind.api.domain.blame.dto.BlameResponseDTO;
import com.blind.api.domain.blame.service.BlameService;
import com.blind.api.domain.blame.service.BlameServiceImpl;
import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.comment.v1.service.CommentService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.dto.PostDTO;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@RestController
public class BlameControllerImpl implements BlameController{
    private final PostService postService;
    private final CommentService commentService;
    private final TokenService tokenService;
    private final BlameService blameService;

    @RequestMapping(value = {"/post/blame"}, method= RequestMethod.POST)
    public void postBlame(Long postId, String reason, HttpServletRequest request) {
        Post post = postService.findById(postId);
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));

        if (blameService.checkPostBlame(post, user) == false) {
            blameService.blamePost(post, user, reason);
            postService.addBlameCnt(postId);
        }
    }

    @RequestMapping(value = {"/comment/blame"}, method= RequestMethod.POST)
    public void commentBlame(Long commentId, String reason, HttpServletRequest request) {
        Comment comment = commentService.findCommentById(commentId);
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));

        if (blameService.checkCommentBlame(comment, user) == false) {
            blameService.blameComment(comment, user, reason);
            commentService.addBlameCnt(commentId);
        }
    }

    @RequestMapping(value = {"/blame/post"}, method= RequestMethod.GET)
    public BlameResponseDTO findAllPost(HttpServletRequest request, Pageable pageable) {
        List<PostBlame> postBlame = blameService.findAllPost();
        final int start = (int)pageable.getOffset();
        final int end = Math.min((start + pageable.getPageSize()), postBlame.size());
        final Page<PostBlame> page = new PageImpl<>(postBlame.subList(start, end), pageable, postBlame.size());

        BlameResponseDTO<PostBlame> dtoList = new BlameResponseDTO();
        postBlame.stream().forEach( postBlames -> {
            dtoList.getContents().add(PostBlame.builder()
                    .post(postBlames.getPost())
                    .user(postBlames.getUser())
                    .reason(postBlames.getReason())
                    .build());
        });
        dtoList.setPage(page.getPageable().getPageNumber());
        dtoList.setPages(page.getTotalPages());
        return dtoList;
    }

    @RequestMapping(value = {"/blame/comment"}, method= RequestMethod.GET)
    public BlameResponseDTO findAllComment(HttpServletRequest request, Pageable pageable) {
        List<CommentBlame> commentBlame = blameService.findAllComment();
        final int start = (int)pageable.getOffset();
        final int end = Math.min((start + pageable.getPageSize()), commentBlame.size());
        final Page<CommentBlame> page = new PageImpl<>(commentBlame.subList(start, end), pageable, commentBlame.size());

        BlameResponseDTO<CommentBlame> dtoList = new BlameResponseDTO();
        commentBlame.stream().forEach( commentBlames -> {
            dtoList.getContents().add(CommentBlame.builder()
                    .comment(commentBlames.getComment())
                    .user(commentBlames.getUser())
                    .reason(commentBlames.getReason())
                    .build());
        });
        dtoList.setPage(page.getPageable().getPageNumber());
        dtoList.setPages(page.getTotalPages());
        return dtoList;
    }
}
