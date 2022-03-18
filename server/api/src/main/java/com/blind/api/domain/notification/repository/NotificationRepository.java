package com.blind.api.domain.notification.repository;

import com.blind.api.domain.notification.domain.Noti;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Noti, Long> {
    List<Noti> findByUserOrderByCreatedDateDesc(User user);
    void deleteByUserAndId(User user, Long id);
    Noti findByUserAndPost(User user, Post post);
    void deleteAllByUser(User user);
    Integer countByUserAndIsChecked(User user, Boolean isChecked);
    Noti findByUserAndId(User user, Long id);

    @Query("update Noti p set p.isChecked = true where p.user = :user")
    @Modifying
    void checkAllByUser(@Param("user") User user);
}
