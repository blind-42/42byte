/*
package com.blind.api.global.firebase.service;

import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.global.firebase.request.NotificationRequest;
import com.google.firebase.FirebaseApp;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.WebpushConfig;
import com.google.firebase.messaging.WebpushNotification;
import lombok.extern.slf4j.Slf4j;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.concurrent.ExecutionException;

@Service
@AllArgsConstructor
@Slf4j
public class FCMServiceImpl implements FCMService {

    private final FirebaseApp firebaseApp;

    @Override
    @Transactional
    public void saveToken(User user) {
        user.setFcmToken(String.valueOf(firebaseApp.getOptions().hashCode()));
    }

    @Override
    @Transactional
    public String getToken(User user) {
        return null;
    }

    @Override
    @Transactional
    public void deleteToken(User user) {

    }

    @Override
    @Transactional
    public boolean hasKey(User user) {
        return false;
    }

    @Transactional
    public Message send(final NotificationRequest notificationRequest) throws InterruptedException, ExecutionException {
        Message message = Message.builder()
                .setToken(notificationRequest.getToken())
                .setWebpushConfig(WebpushConfig.builder().putHeader("ttl", "300")
                        .setNotification(new WebpushNotification(notificationRequest.getTitle(),
                                notificationRequest.getMessage()))
                        .build())
                .build();

        String response = FirebaseMessaging.getInstance().sendAsync(message).get();
        log.info("Sent message: " + response);
        return message;
    }
}
*/
