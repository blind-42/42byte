package com.blind.api.domain.post.v2.controller;

import com.blind.api.domain.blame.service.BlameService;
import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.service.BoardService;
import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.comment.dto.CommentDTO;
import com.blind.api.domain.comment.dto.ReCommentDTO;
import com.blind.api.domain.comment.service.CommentService;
import com.blind.api.domain.like.service.LikeService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.dto.PostDTO;
import com.blind.api.domain.post.v2.dto.PostDetailDTO;
import com.blind.api.domain.post.v2.dto.PostRequestDTO;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.global.exception.BusinessException;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import org.thymeleaf.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@RestController
@AllArgsConstructor
public class PostControllerImpl implements PostController{
    private final PostService postService;
    private final TokenService tokenService;
    private final LikeService likeService;
    private final BoardService boardService;

    /* 게시판 조회 */
    @RequestMapping(value="/board", method = RequestMethod.GET)
    public PostResponseDTO findAllPost(Long boardId, Pageable pageable, HttpServletRequest request) {
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Board board = boardService.findById(boardId);
        Page<Post> postList = postService.findAllByBoardId(boardId, user, pageable);
        RoleType roleType = setRoleType(user, boardService.findById(boardId));

        PostResponseDTO<PostDTO> dtoList = new PostResponseDTO();
        postList.stream().forEach( post -> {
                dtoList.getContents().add(PostDTO.from(post, roleType));
        });
        dtoList.setName(board.getName());
        dtoList.setId(board.getId());
        dtoList.setPage(postList.getPageable().getPageNumber());
        dtoList.setPages(postList.getTotalPages());
        return dtoList;
    }

    /*전체 게시판 게시글 검색*/
    @RequestMapping(value="/board/search", method = RequestMethod.GET)
    public PostResponseDTO searchPost(Long boardId, String keyword, Pageable pageable, HttpServletRequest request){
        PostResponseDTO dtoList = new PostResponseDTO();
        Board board;
        if (boardId != 0)
            board = boardService.findById(boardId);
        else
            board = new Board("전체 게시판");
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Page<Post> postList = postService.search(boardId, user, keyword, pageable);

        postList.stream().forEach( post -> {
            Board board1 = post.getBoard();
            RoleType roleType = setRoleType(user, board1);
            dtoList.getContents().add(PostDTO.from(post, roleType));
        });
        dtoList.setName(board.getName());
        dtoList.setId(boardId);
        dtoList.setPage(postList.getPageable().getPageNumber());
        dtoList.setPages(postList.getTotalPages());
        return dtoList;
    }

    /*게시글 생성*/
    @RequestMapping(value="/post", method = RequestMethod.POST)
    public Post savePost(Long boardId, PostRequestDTO requestDTO, HttpServletRequest request){
        Board board = boardService.findById(boardId);
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        return postService.save(board, user, requestDTO.getTitle(), requestDTO.getContent());
    }

    /*게시글 상세조회 페이지*/
    @RequestMapping(value={"/post"}, method = RequestMethod.GET)
    public PostDetailDTO findPostDetailByPostId (Long boardId, Long postId, HttpServletRequest request){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Post post = postService.findById(postId);
        Boolean isUsers = StringUtils.equals(post.getAuthorId(), user.getId());
        Boolean isLiked = likeService.checkPostLike(post, user);
        RoleType roleType = setRoleType(user, post.getBoard());

        if (roleType == RoleType.USER && post.getIsDel() >= 1)
            throw new BusinessException("{invalid.request}");
        PostDetailDTO postDetailDTO = PostDetailDTO.from(post, isUsers, isLiked, setRoleType(user,post.getBoard()));

        postService.updateView(postId);
        return postDetailDTO;
    }

    /*게시글 수정*/
    @RequestMapping(value={"/post"}, method = RequestMethod.PUT)
    public void updatePost(Long postId, PostRequestDTO requestDTO, HttpServletRequest request){
        Post post = postService.findById(postId);
        Long userId = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request)).getId();
        if (userId.equals(post.getAuthorId()) != true)
            throw new BusinessException("{invalid.request}");
        postService.updatePost(post, requestDTO.getTitle(), requestDTO.getContent());
    }

    /*게시글 삭제 및 차단 */
    @RequestMapping(value={"/post"}, method = RequestMethod.DELETE)
    public void deletePost(Long postId, HttpServletRequest request){
        Post post = postService.findById(postId);
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        RoleType roleType = setRoleType(user, post.getBoard());
        if ((roleType == RoleType.USER) && (user.getId() != post.getAuthorId()))
            throw new BusinessException("{invalid.request}");
        if (user.getId() == post.getAuthorId() && post.getIsDel() == 0)
            postService.delete(post, RoleType.USER.getValue());
        else if (post.getIsDel() == 0)
            postService.delete(post, roleType.getValue());
    }

    @RequestMapping(value={"/post"}, method = RequestMethod.PATCH)
    public void setNotice(Long postId, HttpServletRequest request){
        Post post = postService.findById(postId);
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        RoleType roleType = setRoleType(user, post.getBoard());
        if (roleType == RoleType.USER)
            throw new BusinessException("{invalid.request}");
        if (post.getIsDel() > 0)
            throw new BusinessException("{invalid.request}");
        else if(post.getIsNotice() == false)
            postService.setNotice(post);
        else
            postService.deleteNotice(post);
    }

    /*마이페이지 (내가 쓴 글)*/
    @RequestMapping(value={"/mypage/post"}, method = RequestMethod.GET)
    public PostResponseDTO findPostByUserId (Pageable pageable, HttpServletRequest request){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Page<Post> savePageable = postService.findPostByIdIn(user, pageable);

        PostResponseDTO dtoList = new PostResponseDTO();
        savePageable.stream().forEach( post -> {
            RoleType roleType = setRoleType(user, post.getBoard());
            dtoList.getContents().add(PostDTO.from(post, roleType));
        });
        dtoList.setPage(savePageable.getPageable().getPageNumber());
        dtoList.setPages(savePageable.getTotalPages());

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
