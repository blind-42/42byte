package com.blind.api.domain.notification.service;

import com.blind.api.domain.notification.domain.Noti;
import com.blind.api.domain.notification.repository.NotificationRepository;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.global.exception.BusinessException;
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
        if (noti == null) {
            noti =  notificationRepository.save(Noti.builder()
                    .user(user)
                    .post(post)
                    .contentType(contentType)
                    .title(title)
                    .content(content)
                    .count(1L)
                    .isChecked(false)
                    .build());
        } else {
            noti.setContent(content);
            noti.setCount(noti.getCount() + 1L);
        }
        return noti;
    }

    @Transactional
    public Noti findById(User user, Long id) {
        return notificationRepository.findByUserAndId(user, id);
    }

    @Transactional
    public List<Noti> getNoti(User user) {
        return notificationRepository.findByUserOrderByCreatedDateDesc(user);
    }

    @Transactional
    public void deleteOne(User user, Long id) {
        notificationRepository.deleteByUserAndId(user, id);
    }

    @Transactional
    public void deleteByUser(User user) {
        notificationRepository.deleteAllByUser(user);
    }

    @Transactional
    public void updateNoti(User rootUser, Post post) {
        if (rootUser.getIsNotification() == false) {
            Noti noti = notificationRepository.findByUserAndPost(rootUser, post);
            if (noti != null)
                notificationRepository.delete(noti);
        }
    }

    @Transactional
    public void checkNoti(Noti noti) {
        noti.setIsChecked(true);
    }

    @Transactional
    public void checkAllNoti(User user) {
        notificationRepository.checkAllByUser(user);
    }

    @Transactional
    public Integer getUnchecked(User user) {
        return notificationRepository.countByUserAndIsChecked(user, false);
    }
}
