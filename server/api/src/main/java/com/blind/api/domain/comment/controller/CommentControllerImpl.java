package com.blind.api.domain.comment.controller;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.comment.dto.*;
import com.blind.api.domain.comment.service.CommentService;
import com.blind.api.domain.notification.service.NotificationService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.service.UserService;
import com.blind.api.global.exception.BusinessException;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import org.thymeleaf.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@RestController
@AllArgsConstructor
public class CommentControllerImpl implements CommentController {
    private final CommentService commentService;
    private final PostService postService;
    private final TokenService tokenService;
    private final UserService userService;
    private final NotificationService notificationService;

    /*댓글 저장*/
    @RequestMapping(value={"/comment"}, method=RequestMethod.POST)
    public void saveComment(Long boardId, Long postId, CommentRequestDTO requestDTO, HttpServletRequest request){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Post post = postService.findById(postId);

        /*최대 댓글수는 1000개*/
        if (post.getCommentCnt() >= 1000)
            throw new BusinessException("{invalid.request}");
        User postAuthor = userService.findById(post.getAuthorId());
        commentService.save(boardId,post, user, requestDTO.getContent());
        /*댓글수는 쿼리문을 통해 1 증가시켜준다*/
        postService.updateComment(postId, 1L);
        /*댓글 작성자와 게시글 작성자가 다르다면 게시글 작성자에게 알림을 생성된다.*/
        if (postAuthor.getId() != user.getId()) {
            notificationService.updateNoti(postAuthor, post);
            notificationService.save(postAuthor, post, "post", post.getTitle(), requestDTO.getContent());
            userService.setCheck(postAuthor);
        }
    }

    /*댓글 수정*/
    @RequestMapping(value={"/comment"}, method = RequestMethod.PUT)
    public void updateComment(Long commentId, CommentRequestDTO requestDTO, HttpServletRequest request){
        Comment comment = commentService.findCommentById(commentId);
        Long userId = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request)).getId();
        if (!userId.equals(comment.getAuthorId()))
            return ;
        commentService.update(comment, requestDTO.getContent());
    }

    /*댓글 삭제*/
    @RequestMapping(value={"/comment"}, method = RequestMethod.DELETE)
    public void deleteComment(Long commentId, HttpServletRequest request){
        Comment comment = commentService.findCommentById(commentId);
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        RoleType roleType = setRoleType(user, comment.getPost().getBoard());

        /*관리자, 매니저가 아니면서 남의 댓글에 접근했을 경우 처리*/
        if (roleType == RoleType.USER && user.getId() != comment.getAuthorId())
            throw new BusinessException("{invalid.request}");
        /*본인이 댓글을 삭제하는 경우*/
        if (user.getId() == comment.getAuthorId() && comment.getIsDel() == 0)
            commentService.delete(comment, RoleType.USER.getValue());
        /*관리자, 매니저가 댓글을 삭제하는 경우*/
        else if (comment.getIsDel() == 0)
            commentService.delete(comment, roleType.getValue());
    }

    /*내가 작성한 댓글 조회*/
    @RequestMapping(value={"/mypage/comment"}, method = RequestMethod.GET)
    public CommentResponseDTO findCommentByUserId (Pageable pageable, HttpServletRequest request){
        Long userId = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request)).getId();

        Page<Comment> myCommentList = commentService.findCommentByUser(userId, pageable);
        CommentResponseDTO dtoList = new CommentResponseDTO();
        myCommentList.stream().forEach( comment -> {
            dtoList.getContents().add(CommentMyDTO.from(comment));
        });
        dtoList.setPage(myCommentList.getPageable().getPageNumber());
        dtoList.setPages(myCommentList.getTotalPages());
        return dtoList;
    }

    /*게시글에 달려있는 댓글 전부 조회*/
    @RequestMapping(value={"/comment"}, method = RequestMethod.GET)
    public CommentListResponseDTO findCommentByPost (Long postId, HttpServletRequest request){
        Post post = postService.findById(postId);
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        HashMap<Long, CommentDTO> commentDTOHashMap = new LinkedHashMap<>(1001, 1);
        List<ReCommentDTO> reCommentList = new ArrayList<>();

        List<Comment> commentList = commentService.findAllComment(postId);
        List<Comment> userCommentList = commentService.findByPostAndUser(postId, user.getId());

        commentList.stream().forEach((comment -> {
            Long rooCmmtId = comment.getRootCommentId();
            /*일반 댓글인 경우*/
            if (rooCmmtId == null) {
                CommentDTO commentDTO = CommentDTO.from(comment);
                /*현재 접속중인 유저의 댓글인지 확인*/
                commentDTO.setIsUsers(StringUtils.equals(comment.getAuthorId(), user.getId()));
                /*현재 접속중인 유저가 좋아요를 눌렀는지 확인*/
                commentDTO.setIsLiked(!userCommentList.contains(comment));
                commentDTOHashMap.put(commentDTO.getId(), commentDTO);
            } else {
                /*대댓글인 경우*/
                ReCommentDTO reCommentDTO = ReCommentDTO.from(comment);
                reCommentDTO.setIsUsers(StringUtils.equals(comment.getAuthorId(), user.getId()));
                reCommentDTO.setIsLiked(!userCommentList.contains(comment));
                reCommentList.add(reCommentDTO);
            }
        }));

            /* 대댓글을 일반 댓글의 리스트에 추가 */
        reCommentList.stream().forEach( reCommentDTO ->{
            CommentDTO commentDTO = commentDTOHashMap.get(reCommentDTO.getRootCommentId());
            if (commentDTO != null)
                commentDTO.getRecomments().add(reCommentDTO);
            });
        List<CommentDTO> result = new LinkedList<>(commentDTOHashMap.values());

        CommentListResponseDTO dtoList = new CommentListResponseDTO();
        dtoList.setContents(result);
        dtoList.setTotal(post.getCommentCnt());
        return dtoList;
    }

    RoleType setRoleType(User user, Board board) {
        if (user.getRoleType() == RoleType.ADMIN)
            return  RoleType.ADMIN;
        else if (board.getManager() == user)
            return RoleType.MANAGER;
        else
            return RoleType.USER;
    }
}
