package com.blind.api.domain.post.v2.controller;


import com.blind.api.domain.comment.v1.service.CommentService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.dto.PostDTO;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestController
@AllArgsConstructor
public class postController {
    private final PostService postService;
    private final CommentService commentService;

    @RequestMapping(value={"/board/{boardId}/{postId}"}, method = RequestMethod.GET)
    public Map<String, Object> findPostDetailByPostId (@PathVariable Long boardId, @PathVariable Long postId){
        Map<String, Object> Map = new HashMap<>();
        Map.put("post", postService.findById(postId).orElseThrow(RuntimeException::new));
        Map.put("comment", commentService.findAllComment(boardId, postId));
        postService.updateView(postId);
        return Map;
    }

    @RequestMapping(value="/board/{boardId}", method = RequestMethod.POST)
    public Object createPost(@PathVariable Long boardId,
                             @RequestBody Map<String, String> body,
                             HttpServletRequest request){
        return postService.save(boardId, body.get("title"), body.get("content"), HeaderUtil.getAccessToken(request));
    }


    @RequestMapping(value="/board/{boardId}/search", method = RequestMethod.GET)
    public Page<Post> searchPost(@PathVariable Long boardId,
                                 @RequestParam String keyword,
                                 @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable){
        return postService.search(keyword, pageable);
    }

    @RequestMapping(value="/board/{boardId}", method = RequestMethod.GET)
    public Page<PostDTO> findAllPost(@PathVariable Long boardId, Pageable pageable) {
        Page<Post> postList = postService.findAllByBoardId(boardId, pageable);
        Page<PostDTO> pagingList = postList.map(
                post -> PostDTO.from(post));

        return pagingList;
    }
}
