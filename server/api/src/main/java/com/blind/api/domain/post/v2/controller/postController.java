package com.blind.api.domain.post.v2.controller;


import com.blind.api.domain.comment.v1.service.CommentService;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.security.jwt.v1.domain.Token;
import com.blind.api.domain.security.oauth.v2.repository.UserRefreshTokenRepository;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.repository.UserRepository;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;

@RestController
@AllArgsConstructor
public class postController {
    private final PostService postService;
    private final CommentService commentService;
    private final UserRefreshTokenRepository testTokenRepository;
    private final UserRepository testUserRepository;

    @PostConstruct
    public void initiallize() {
        Token token = new Token();
        token.setAccessToken("access");
        token.setRefreshToken("refresh");
        token.setHashId("hashId");
        testTokenRepository.save(token);

        User user = new User();
        user.setHashId("hashId");
        user.setRoleType(RoleType.USER);
        testUserRepository.save(user);
    }

    @RequestMapping(value="/board/{boardId}/{postId}", method = RequestMethod.GET)
    public HashMap<String, Object> findPostInfoByPostId (@PathVariable Long boardId, @PathVariable Long postId){
         HashMap<String, Object> hashMap = new HashMap<>();
         hashMap.put("post", postService.findById(postId).orElseThrow(RuntimeException::new));
         hashMap.put("comment", commentService.findAllComment(boardId, postId));
        return hashMap;
    }

    @RequestMapping(value="/board/{boardId}", method = RequestMethod.POST)
    public Object createPost(@PathVariable Long boardId,
                             @RequestBody HashMap<String, String> body,
                             HttpServletRequest request){
        return postService.save(boardId, body.get("title"), body.get("content"), HeaderUtil.getAccessToken(request));
    }
}
