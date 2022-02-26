package com.blind.api.domain.post.v2.controller;

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
public class PostControllerImpl implements PostController{
    private final PostService postService;
    private final CommentService commentService;
    private final TokenService tokenService;
    private final LikeService likeService;
    private final BoardService boardService;

    /* 게시판 조회 */
    @RequestMapping(value="/board", method = RequestMethod.GET)
    public PostResponseDTO findAllPost(Long boardId, Pageable pageable, HttpServletRequest request) {
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Page<Post> postList = postService.findAllByBoardId(boardId, pageable);
        RoleType roleType = setRoleType(user, boardService.findById(boardId));

        PostResponseDTO<PostDTO> dtoList = new PostResponseDTO();
        postList.stream().forEach( post -> {
            dtoList.getContents().add(PostDTO.from(post, roleType.getValue()));
        });
        dtoList.setPage(postList.getPageable().getPageNumber());
        dtoList.setPages(postList.getTotalPages());
        return dtoList;
    }

    /*전체 게시판 게시글 검색*/
    @RequestMapping(value="/board/search", method = RequestMethod.GET)
    public PostResponseDTO searchPost(String keyword, Pageable pageable, HttpServletRequest request){
        PostResponseDTO dtoList = new PostResponseDTO();
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Page<Post> postList = postService.search(keyword, pageable);

        postList.stream().forEach( post -> {
            Board board = post.getBoard();
            RoleType roleType = setRoleType(user, board);
            dtoList.getContents().add(PostDTO.from(post, roleType.getValue()));
        });
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
    public Map<String, Object> findPostDetailByPostId (Long boardId, Long postId, HttpServletRequest request){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Post post = postService.findById(postId);
        Boolean isUsers = StringUtils.equals(post.getAuthorId(), user.getId());
        Boolean isLiked = likeService.checkPostLike(post, user);

        PostDetailDTO postDetailDTO = PostDetailDTO.from(post, isUsers, isLiked, setRoleType(user,post.getBoard()));

        /* 댓글 전체 조회 후 일반 댓글과 대댓글 구분*/
        HashMap<Long, CommentDTO> commentDTOHashMap = new HashMap<>();
        List<ReCommentDTO> reCommentList = new ArrayList<>();
        List<Comment> commentList = commentService.findAllComment(boardId, postId);
        commentList.stream().forEach(
                (comment -> {
                    Long rooCmmtId = comment.getRootCommentId();
                    if (rooCmmtId == null) {
                        CommentDTO commentDTO = CommentDTO.from(comment);
                        commentDTO.setIsUsers(StringUtils.equals(comment.getAuthorId(), user.getId()));
                        commentDTO.setIsLiked(likeService.checkCommentLike(comment, user));
                        commentDTOHashMap.put(commentDTO.getId(), commentDTO);
                    }
                    else
                    {
                        ReCommentDTO reCommentDTO = ReCommentDTO.from(comment);
                        reCommentDTO.setIsUsers(StringUtils.equals(comment.getAuthorId(), user.getId()));
                        reCommentDTO.setIsLiked(likeService.checkCommentLike(comment, user));
                        reCommentList.add(reCommentDTO);
                    }
                })
        );

        /* 대댓글을 일반 댓글의 리스트에 추가 */
        reCommentList.stream().forEach( reCommentDTO ->{
            CommentDTO commentDTO = commentDTOHashMap.get(reCommentDTO.getRootCommentId());
            if (commentDTO != null)
                commentDTO.getRecomments().add(reCommentDTO);
        });

        postService.updateView(postId);

        Map<String, Object> map = new HashMap<>();
        map.put("post", postDetailDTO);
        map.put("comment", commentDTOHashMap.values());
        return map;
    }

    /*게시글 수정*/
    @RequestMapping(value={"/post"}, method = RequestMethod.PUT)
    public void updatePost(Long postId, PostRequestDTO requestDTO, HttpServletRequest request){
        Post post = postService.findById(postId);
        Long userId = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request)).getId();
        if (userId.equals(post.getAuthorId()) != true)
            return ;
        postService.updatePost(post, requestDTO.getTitle(), requestDTO.getContent());
    }

    /*게시글 삭제*/
    @RequestMapping(value={"/post"}, method = RequestMethod.DELETE)
    public void deletePost(Long postId, HttpServletRequest request){
        Post post = postService.findById(postId);
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        RoleType roleType = setRoleType(user, post.getBoard());
        if (roleType == RoleType.USER && user.getId() != post.getAuthorId())
            return;
        else
            postService.delete(post, roleType.getValue());
    }

    /*마이페이지 (내가 쓴 글)*/
    @RequestMapping(value={"/mypage/post"}, method = RequestMethod.GET)
    public PostResponseDTO findPostByUserId (Pageable pageable, HttpServletRequest request){
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));
        Page<Post> savePageable = postService.findPostByIdIn(user, pageable);

        PostResponseDTO dtoList = new PostResponseDTO();
        savePageable.stream().forEach( post -> {
            RoleType roleType = setRoleType(user, post.getBoard());
            dtoList.getContents().add(PostDTO.from(post, roleType.getValue()));
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
