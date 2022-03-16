package com.blind.api.domain.comment.controller;

import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.comment.dto.CommentRequestDTO;
import com.blind.api.domain.comment.service.CommentService;
import com.blind.api.domain.comment.service.ReCommentService;
import com.blind.api.domain.notification.domain.Noti;
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

import javax.management.Notification;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@AllArgsConstructor
public class ReCommentControllerImpl implements ReCommentController {
    private final ReCommentService reCommentService;
    private final CommentService commentService;
    private final TokenService tokenService;
    private final PostService postService;
    private final UserService userService;
    private final NotificationService notificationService;

    @RequestMapping(value = "/recomment", method = RequestMethod.POST)
    public void createReComment(Long targetCmmtId, CommentRequestDTO requestDTO, HttpServletRequest request) {
        Comment targetCmmt = commentService.findCommentById(targetCmmtId);
        Comment rootCmmt = targetCmmt;
        while (rootCmmt.getRootCommentId() != null)
            rootCmmt = commentService.findCommentById(rootCmmt.getRootCommentId());
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Long rootCmmtId = rootCmmt.getId();
        Post post = rootCmmt.getPost();
        reCommentService.save(targetCmmt, rootCmmtId, user.getId(), requestDTO.getContent());
        postService.updateComment(rootCmmt.getPost().getId(), 1L);
        User rtAuthor = userService.findById(rootCmmt.getAuthorId());
        User pstAuthor = userService.findById(post.getAuthorId());

        if (pstAuthor.getId() != user.getId()) {
            if (pstAuthor.getIsChecked() == false) {
                Noti noti = notificationService.findByUserAndPost(pstAuthor, post);
                if (noti != null)
                    notificationService.delete(noti.getId());
            }
            notificationService.save(pstAuthor, post, "post", post.getTitle(), requestDTO.getContent());
            userService.setCheck(pstAuthor);
        }
        if (rtAuthor.getId() != user.getId()) {
            if (rtAuthor.getIsChecked() == false) {
                Noti noti = notificationService.findByUserAndPost(rtAuthor, post);
                if (noti != null)
                    notificationService.delete(noti.getId());
            }
                notificationService.save(rtAuthor, post, "comment", rootCmmt.getContent(), requestDTO.getContent());
                userService.setCheck(rtAuthor);
            }
        }
    }