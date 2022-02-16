package com.blind.api.domain.post.v2.controller;

import com.blind.api.domain.comment.v1.service.CommentService;
import com.blind.api.domain.like.service.LikeService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.dto.PostDTO;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.user.v2.service.UserService;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

@RestController
@AllArgsConstructor
public class PostController {
    private final PostService postService;
    private final CommentService commentService;
    private final UserService userService;
    private final LikeService likeService;

    /* 게시판 조회 */
    @RequestMapping(value="/board", method = RequestMethod.GET)
    public PostResponseDTO findAllPost(@RequestParam("boardId") Long boardId,
                                       @PageableDefault(size = 24)
                                       @SortDefault.SortDefaults({
                                               @SortDefault(sort = "isNotice", direction = Sort.Direction.DESC),
                                               @SortDefault(sort = "id", direction = Sort.Direction.DESC)})Pageable pageable) {
        PostResponseDTO dtoList = new PostResponseDTO();
        Page<Post> postList = postService.findAllByBoardId(boardId, pageable);
        postList.stream().forEach( post -> {
            dtoList.getContents().add(PostDTO.from(post));
        });
        dtoList.setPage(postList.getPageable().getPageNumber());
        dtoList.setPages(postList.getTotalPages());
        return dtoList;
    }

    /*전체 게시판 게시글 검색*/
    @RequestMapping(value="/board/search", method = RequestMethod.GET)
    public PostResponseDTO searchPost(@RequestParam("keyword") String keyword,
                                      @PageableDefault(size = 24)
                                      @SortDefault.SortDefaults({
                                              @SortDefault(sort = "isNotice", direction = Sort.Direction.DESC),
                                              @SortDefault(sort = "id", direction = Sort.Direction.DESC)}) Pageable pageable){
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
    public Object createPost(@RequestParam("boardId") Long boardId,
                             @RequestBody Map<String, String> body,
                             HttpServletRequest request){
        return postService.save(boardId, body.get("title"), body.get("content"), HeaderUtil.getAccessToken(request));
    }

    /*게시글 상세조회 페이지*/
    @RequestMapping(value={"/post"}, method = RequestMethod.GET)
    public Map<String, Object> findPostDetailByPostId (@RequestParam("boardId") Long boardId, @RequestParam("postId") Long postId){
        Map<String, Object> Map = new HashMap<>();
        Map.put("post", postService.findById(postId).orElseThrow(RuntimeException::new));
        Map.put("comment", commentService.findAllComment(boardId, postId));
        postService.updateView(postId);
        return Map;
    }

    /*게시글 수정*/
    @RequestMapping(value={"/post"}, method = RequestMethod.PUT)
    public void updatePost(@RequestParam("postId") Long postId, @RequestBody Map<String, String> map, HttpServletRequest request){
        Post post = postService.findById(postId).orElseThrow(RuntimeException::new);
        if (userService.compareUser(post.getAuthorId(), HeaderUtil.getAccessToken(request)) != true)
            return ;
        postService.updatePost(post, map.get("title"), map.get("content"));
    }

    /*게시글 삭제*/
    @RequestMapping(value={"/post"}, method = RequestMethod.DELETE)
    public void deletePost(@RequestParam Long postId, HttpServletRequest request){
        Post post = postService.findById(postId).orElseThrow(RuntimeException::new);
        if (userService.compareUser(post.getAuthorId(), HeaderUtil.getAccessToken(request)) != true)
            return ;
        likeService.deleteByPost(post);
        postService.deletePost(post);
        commentService.deleteCommentByPostId(postId);
    }

    /*마이페이지 (내가 쓴 글)*/
    @RequestMapping(value={"/mypage/post"}, method = RequestMethod.GET)
    public PostResponseDTO findPostByUserId (HttpServletRequest request,
                                        @PageableDefault(size = 24, sort = "id", direction = Sort.Direction.DESC) Pageable pageable){
        String accessToken = HeaderUtil.getAccessToken(request);
        Long userId = userService.findByAccessToken(accessToken).orElseThrow().getId();
        PostResponseDTO dtoList = new PostResponseDTO();
        Page<Post> postList = postService.findAllByAuthorId(userId, pageable);
        postList.stream().forEach( post -> {
            dtoList.getContents().add(PostDTO.from(post));
        });
        dtoList.setPage(postList.getPageable().getPageNumber());
        dtoList.setPages(postList.getTotalPages());
        return dtoList;
    }
}
