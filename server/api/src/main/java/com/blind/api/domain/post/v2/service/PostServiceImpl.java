package com.blind.api.domain.post.v2.service;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.service.BoardService;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.repository.PostRepository;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class PostServiceImpl implements PostService {
    private final PostRepository postRepository;
    private final BoardService boardService;
    private final UserService userService;

    @Override
    public Page<Post> findAllByBoardId(Long boardId, Pageable pageable) {
        return postRepository.findAllByBoardId(boardId, pageable);
    }

    public Optional<Post> findById(Long postId){
        return postRepository.findById(postId);
    }

    public Post save(Long boardId, String title, String content, String accessToken){
        Board board = boardService.findById(boardId)
                .orElseThrow(RuntimeException::new);
        User user = userService.findByAccessToken(accessToken)
                .orElseThrow(RuntimeException::new);
        Post post = Post.builder()
                .board(board)
                .title(title)
                .content(content)
                .authorId(user.getId())
                .build();
        return postRepository.save(post);
    }

    public void updateView(Long id) {
        postRepository.updateView(id);
    }

    public void updateLike(Long id, Long add) {
        postRepository.updateLike(id, add);
    }


}
