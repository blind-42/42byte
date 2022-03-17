package com.blind.api.domain.notification.service;

import com.blind.api.domain.notification.domain.Noti;
import com.blind.api.domain.notification.repository.NotificationRepository;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@AllArgsConstructor
public class NotificationService {
    private final NotificationRepository notificationRepository;

    @Transactional
    public Noti save(User user, Post post, String contentType, String title, String content) {
        Noti noti = notificationRepository.findByUserAndPost(user, post);
        if (noti != null) {
            noti =  notificationRepository.save(Noti.builder()
                    .user(user)
                    .post(post)
                    .contentType(contentType)
                    .title(title)
                    .content(content)
                    .build());
        } else {
            noti.setContent(content);
            noti.setCount(noti.getCount() + 1L);
        }
        return noti;
    }

    @Transactional
    public List<Noti> getNoti(User user) {
        return notificationRepository.findByUserOrderByCreatedDateDesc(user);
    }

    @Transactional
    public void delete(Long id) {
        notificationRepository.deleteById(id);
    }

    public Noti findByUserAndPost(User user, Post post) {
        return notificationRepository.findByUserAndPost(user, post);
    }

    @Transactional
    public void deleteByUser(User user) {
        notificationRepository.deleteAllByUser(user);
    }

    @Transactional
    public void checkNoti(User rootUser, User authorUser, Post post) {
        if (rootUser.getIsChecked() == true) {
            Noti noti = notificationRepository.findByUserAndPost(rootUser, post);
            if (noti != null)
                notificationRepository.deleteById(post.getId());
        }
    }
}
