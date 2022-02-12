package com.blind.api.domain.post.v2.service;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.board.v1.service.BoardService;
import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.repository.PostRepository;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PostServiceImpl implements PostService {
    private final PostRepository postRepository;
    private final BoardService boardService;
    private final UserService userService;

    @Override
    @Transactional
    public Page<Post> findAllByBoardId(Long boardId, Pageable pageable) {
        return postRepository.findAllByBoardId(boardId, pageable);
    }
    @Override
    @Transactional
    public Page<Post> findAllByAuthorId(Long authorId, Pageable pageable){
        return postRepository.findAllByAuthorId(authorId, pageable);
    }
    @Override
    @Transactional
    public Optional<Post> findById(Long postId){
        return postRepository.findById(postId);
    }

    @Override
    @Transactional
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

    @Override
    @Transactional
    public Page<Post> search(String keyword, Pageable pageable) {
        return postRepository.findPostsWithKeyword(keyword, pageable);
    }
    @Override
    @Transactional
    public void updateLike(Long id, Long add) {
        postRepository.updateLike(id, add);
    }

    @Override
    @Transactional
    public void updateView(Long id) {
        postRepository.updateView(id);
    }

    @Override
    @Transactional
    public void updatePost(Post post, String title, String content) {
        post.setTitle(title);
        post.setContent(content);
    }

    @Override
    @Transactional
    public void deletePost(Post post) {
        postRepository.deleteById(post.getId());
    }
}
