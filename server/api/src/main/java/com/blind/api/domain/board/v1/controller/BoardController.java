package com.blind.api.domain.board.v1.controller;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.board.v1.service.BoardService;
import com.blind.api.domain.post.v2.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;

@RestController
@AllArgsConstructor
public class BoardController {
    private final BoardService boardService;
    private final PostService postService;

    @RequestMapping(value="/board/{boardId}", method = RequestMethod.GET)
    public Page<Post> findAllPost(@PathVariable Long boardId, Pageable pageable) {
        return postService.findAllByBoardId(boardId, pageable);
    }

    @RequestMapping(value="/board", method = RequestMethod.POST)
    public Board createPost(@RequestBody String name) {
        return boardService.save(name);
    }

    /*
    @PostConstruct
    public void initiallize() {
        Board board = boardService.save("blind");
        for (int i = 0; i < 100; i++) {
            Post viewPost = Post.builder()
                    .board(board)
                    .title(i + "번째 제목입니다")
                    .content("empty")
                    .authorId(1L)
                    .build();
            postService.save(viewPost);
        }
    }
    */
}
