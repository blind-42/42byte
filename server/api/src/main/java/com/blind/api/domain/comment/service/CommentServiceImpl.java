package com.blind.api.domain.comment.service;

import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.comment.repository.CommentRepository;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.global.exception.BusinessException;
import com.blind.api.global.utils.ApplicationYmlRead;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService{
    private final CommentRepository commentRepository;
    private final ApplicationYmlRead applicationYmlRead;

    /* 댓글 저장 */
    @Override
    @Transactional
    public Comment save(Long boardId, Post post, User user, String content) {
        /* 게시글 작성자와 댓글 작성자 비교 */
        boolean isAuthor = post.getAuthorId().equals(user.getId()) ? true : false;

        Comment comment = Comment.builder()
                .boardId(boardId)
                .post(post)
                .authorId(user.getId())
                .content(content)
                .isAuthor(isAuthor)
                .build();
        return commentRepository.save(comment);
    }

    @Override
    @Transactional
    public Comment findCommentById(Long id) {
        return commentRepository.findCommentById(id).orElseThrow(()-> new BusinessException("{comment.notfound}"));
    }

    /* 게시글의 모든 댓글 조회*/
    @Override
    @Transactional
    public List<Comment> findAllComment(Long postId) {
        List<Comment> commentList = commentRepository.findAllByPostId(postId);
        return commentList;
    }

    @Override
    @Transactional
    public List<Comment> findByPostAndUser(Long postId, Long userId) {
        return commentRepository.findByPostIdAndUserId(postId, userId);
    }

    @Override
    @Transactional
    public Page<Comment> findCommentByUser(Long userId, Pageable pageable) {
        Long blame = Long.parseLong(applicationYmlRead.getBlame());
        return commentRepository.findCommentByAuthorIdAndIsDelEqualsAndBlameCntLessThan(userId, 0, blame, pageable);
    }

    @Override
    @Transactional
    public Page<Comment> findLikeCommentByUserId(Long userId, Pageable pageable){
        return commentRepository.findAllCommentLikeByUserId(userId, pageable);
    }

    @Override
    @Transactional
    public Page<Comment> findDeleted(Pageable pageable) {
        return commentRepository.findAllByIsDelEquals(1, pageable);
    }

    @Override
    @Transactional
    public Page<Comment> findBlamed(Pageable pageable) {
        return commentRepository.findAllByBlameCntGreaterThanEqual( 1L, pageable);
    }

    @Override
    @Transactional
    public Page<Comment> findBlocked(Pageable pageable) {
        String blame = applicationYmlRead.getBlame();
        return commentRepository.findAllByBlameCntGreaterThanEqualOrIsDelGreaterThanEqual(Long.parseLong(blame), 2, pageable);
    }

    @Override
    @Transactional
    public void update(Comment comment, String content) {
        comment.setContent(content);
    }

    @Override
    @Transactional
    public void delete(Comment comment, Integer type) {
        comment.setIsDel(type);
    }

    @Override
    @Transactional
    public void deleteComment(Comment comment) {
        commentRepository.delete(comment);
    }

    @Override
    @Transactional
    public void deleteCommentByPostId(Long postId) {
        commentRepository.deleteCommentByPostId(postId);
    }

    @Override
    @Transactional
    public void updateLike(Long id, Long add) {
        commentRepository.updateLike(id, add);
    }

    @Override
    @Transactional
    public void addBlameCnt(Long id) {
        commentRepository.addBlameCnt(id);
    }

    @Override
    @Transactional
    public void restoreComment(Comment comment) {
        if (comment.getIsDel() > 0)
            comment.setIsDel(0);
        else if (comment.getBlameCnt() >= 5)
            comment.setBlameCnt(0L);
    }
}
