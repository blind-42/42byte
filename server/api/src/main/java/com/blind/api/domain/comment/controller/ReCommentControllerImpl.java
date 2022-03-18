package com.blind.api.domain.comment.controller;

import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.comment.dto.CommentRequestDTO;
import com.blind.api.domain.comment.service.CommentService;
import com.blind.api.domain.comment.service.ReCommentService;
import com.blind.api.domain.notification.service.NotificationService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.service.UserService;
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
    private final PostService postService;
    private final UserService userService;
    private final NotificationService notificationService;

    /*대댓글 저장*/
    @RequestMapping(value = "/recomment", method = RequestMethod.POST)
    public void saveReComment(Long targetCmmtId, CommentRequestDTO requestDTO, HttpServletRequest request) {
        Comment targetCmmt = commentService.findCommentById(targetCmmtId);
        Comment rootCmmt = targetCmmt;
        if (targetCmmt.getRootCommentId() != null)
            rootCmmt = commentService.findCommentById(targetCmmt.getRootCommentId());
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Long rootCmmtId = rootCmmt.getId();
        Post post = rootCmmt.getPost();
        reCommentService.save(targetCmmt, rootCmmtId, user.getId(), requestDTO.getContent());
        postService.updateComment(rootCmmt.getPost().getId(), 1L);
        User targetAuthor = userService.findById(targetCmmt.getAuthorId());
        User pstAuthor = userService.findById(post.getAuthorId());
        User rootAuthor = userService.findById(rootCmmt.getAuthorId());

        /*알림 보내기 -> 게시글 작성자(새로운 댓글)*/
        if (pstAuthor.getId() != user.getId()) {
            notificationService.updateNoti(pstAuthor, post);
            notificationService.save(pstAuthor, post, "post", post.getTitle(), requestDTO.getContent());
        }
        /*알림 보내기 -> 타겟 댓글 작성자(새로운 댓글)*/
        if (targetAuthor.getId() != user.getId()) {
            notificationService.updateNoti(targetAuthor, post);
            notificationService.save(targetAuthor, post, "comment", targetCmmt.getContent(), requestDTO.getContent());
            userService.setCheck(targetAuthor);
        }
        /*알림 보내기 -> 루트 댓글 작성자(새로운 댓글)*/
        if (targetCmmt.getAuthorId() != rootCmmt.getAuthorId() && rootAuthor.getId() != user.getId()) {
            notificationService.updateNoti(rootAuthor, post);
            notificationService.save(rootAuthor, post, "comment", rootCmmt.getContent(), requestDTO.getContent());
            userService.setCheck(rootAuthor);
        }
    }
}