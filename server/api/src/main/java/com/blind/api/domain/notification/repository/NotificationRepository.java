package com.blind.api.domain.notification.repository;

import com.blind.api.domain.notification.domain.Noti;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface NotificationRepository extends JpaRepository<Noti, Long> {
    List<Noti> findByUserOrderByCreatedDateDesc(User user);
    void deleteById(Long id);
    Noti findByUserAndPost(User user, Post post);
    void deleteAllByUser(User user);
}
