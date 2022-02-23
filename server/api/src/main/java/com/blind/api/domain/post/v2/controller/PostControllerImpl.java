package com.blind.api.domain.post.v2.controller;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.service.BoardService;
import com.blind.api.domain.comment.v1.dto.CommentDTO;
import com.blind.api.domain.comment.v1.service.CommentService;
import com.blind.api.domain.like.service.LikeService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.dto.PostDTO;
import com.blind.api.domain.post.v2.dto.PostDetailDTO;
import com.blind.api.domain.post.v2.dto.PostRequestDTO;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.service.UserService;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
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
    public PostResponseDTO findAllPost(Long boardId, Pageable pageable) {
        return postService.findAllByBoardId(boardId, pageable);
    }

    /*전체 게시판 게시글 검색*/
    @RequestMapping(value="/board/search", method = RequestMethod.GET)
    public PostResponseDTO searchPost(String keyword, Pageable pageable){
        PostResponseDTO dtoList = new PostResponseDTO();
        Page<Post> postList = postService.search(keyword, pageable);
        postList.stream().forEach( post -> {
            dtoList.getContents().add(PostDTO.from(post));
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
        PostDetailDTO postDetailDTO = PostDetailDTO.from(post);
        postDetailDTO.setIsUsers(StringUtils.equals(post.getAuthorId(), user.getHashId()));
        postDetailDTO.setIsLiked(likeService.checkPostLike(post, user));

        List<CommentDTO> commentDTOList = new ArrayList<CommentDTO>();
        Optional.ofNullable(commentService.findAllComment(boardId, postId)).orElseGet(Collections::emptyList).stream().forEach(
                (comment -> {
                    CommentDTO commentDTO = CommentDTO.from(comment);
                    commentDTO.setIsUsers(StringUtils.equals(comment.getAuthorId(), user.getId()));
                    commentDTO.setIsLiked(likeService.checkCommentLike(comment, user));
                    commentDTOList.add(commentDTO);
                })
        );
        postService.updateView(postId);
        Map<String, Object> map = new HashMap<>();
        map.put("post", postDetailDTO);
        map.put("comment", commentDTOList);
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
        Long userId = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request)).getId();
        if (userId.equals(post.getAuthorId()) != true)
            return ;
        likeService.deleteByPost(post);
        commentService.deleteCommentByPostId(postId);
        postService.deletePost(post);
    }

    /*마이페이지 (내가 쓴 글)*/
    @RequestMapping(value={"/mypage/post"}, method = RequestMethod.GET)
    public PostResponseDTO findPostByUserId (Pageable pageable, HttpServletRequest request){
        Long userId = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request)).getId();
        return postService.findPostByIdIn(userId, pageable);
    }
}
