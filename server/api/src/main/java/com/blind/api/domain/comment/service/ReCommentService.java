package com.blind.api.domain.comment.service;

import com.blind.api.domain.comment.domain.Comment;

public interface ReCommentService {
    Comment save(Comment targetCmmt, Long rootCmmtId, Long userId, String content);
}
