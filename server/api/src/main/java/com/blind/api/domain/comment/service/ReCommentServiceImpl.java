package com.blind.api.domain.comment.service;

import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.comment.repository.CommentRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@AllArgsConstructor
public class ReCommentServiceImpl implements ReCommentService {
    private final CommentRepository commentRepository;

    @Override
    @Transactional
    public Comment save(Comment targetCmmt, Long rootCmmtId, Long userId, String content) {
        Comment reComment = Comment.toReComment(targetCmmt, rootCmmtId, userId, content);
        return commentRepository.save(reComment);
    }
}
