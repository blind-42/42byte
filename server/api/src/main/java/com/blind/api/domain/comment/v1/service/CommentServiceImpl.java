package com.blind.api.domain.comment.v1.service;

import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.service.PostService;
import com.blind.api.domain.comment.v1.domain.Comment;
import com.blind.api.domain.comment.v1.repository.CommentRepository;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService{
    private final PostService postService;
    private final CommentRepository commentRepository;
    private final UserService userService;

    @Override
    @Transactional
    public Comment update(Comment comment, String content) {
            comment.setContent(content);
            return comment;
    }

    @Override
    @Transactional
    public void delete(Comment comment) {
            comment.setIsDel(true);
            comment.setContent(null);
    }

    @Override
    @Transactional
    public void deleteCommentByPostId(Long postId) {
        commentRepository.deleteCommentByPostId(postId);
    }

    /* 댓글 저장 */
    @Override
    @Transactional
    public Comment save(Long boardId, Long postId, String content, String token) {
        if (token == null) throw new RuntimeException();

        Long postAuthorId = postService.findById(postId)
                .orElseThrow(RuntimeException::new)
                .getAuthorId();
        Long commentAuthorId = userService.findByAccessToken(token)
                .orElseThrow(RuntimeException::new)
                .getId();

        /* 게시글 작성자와 댓글 작성자 비교 */
        Boolean isAuthor = false;
        if (postAuthorId.equals(commentAuthorId))
            isAuthor= true;

        Comment comment = Comment.builder()
                .boardId(boardId)
                .postId(postId)
                .authorId(commentAuthorId)
                .content(content)
                .isAuthor(isAuthor)
                .build();
        return commentRepository.save(comment);
    }

    /*
     * 게시글의 모든 댓글 조회
     * */
    @Override
    @Transactional
    public List<Comment> findAllComment(Long boardId, Long postId) {
        return commentRepository.findAllByBoardIdAndPostId(boardId, postId);
    }

    @Override
    @Transactional
    public void updateLike(Long id, Long add) {
        commentRepository.updateLike(id, add);
    }
}
