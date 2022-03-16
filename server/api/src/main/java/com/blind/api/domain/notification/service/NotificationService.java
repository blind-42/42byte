package com.blind.api.domain.notification.service;

import com.blind.api.domain.notification.domain.Noti;
import com.blind.api.domain.notification.repository.NotificationRepository;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class NotificationService {
    private final NotificationRepository notificationRepository;

    @Transactional
    public Noti save(User user, Post post, String contentType, String title, String content) {
        return notificationRepository.save(Noti.builder()
                .user(user)
                .post(post)
                .contentType(contentType)
                .title(title)
                .content(content)
                .build());
    }

    @Transactional
    public List<Noti> getNoti(User user) {
        return notificationRepository.findByUser(user);
    }

    @Transactional
    public void delete(Long id) {
        notificationRepository.deleteById(id);
    }

    public Noti findByUserAndPost(User user, Post post) {
        return notificationRepository.findByUserAndPost(user, post);
    }
}
