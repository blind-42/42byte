/*
package com.blind.api.global.firebase.controller;

import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.global.firebase.request.NotificationRequest;
import com.blind.api.global.firebase.service.FCMService;
import com.blind.api.global.utils.HeaderUtil;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.Message;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

@Controller
@AllArgsConstructor
public class FCMController {
    private final FCMService fcmService;

    @RequestMapping(value={"/noti"}, method= RequestMethod.GET)
    public Message getUserInfo(HttpServletRequest request) {
        FirebaseApp.initializeApp();
        Firestore
        FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(idToken);
        String uid = decodedToken.getUid();

        firebase.auth().currentUser.getIdToken(*/
/* forceRefresh *//*
 true).then(function(idToken) {
            // Send token to your backend via HTTPS
            // ...
        }).catch(function(error) {
            // Handle error
        });

        NotificationRequest notificationRequest = new NotificationRequest("알림", "내용", "")
        return fcmService.send(NotificationRequest.builder().build());
    }
}
*/
