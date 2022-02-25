package com.blind.api.domain.admin.service;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.comment.domain.Comment;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;

public interface AdminService {
    void setAdmin(User user);
    void deleteAdmin(User user);
}
