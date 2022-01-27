package com.blind.api.domain.oauth.v2.service;

import com.blind.api.domain.oauth.v2.domain.ProviderType;
import com.blind.api.domain.oauth.v2.domain.RoleType;
import com.blind.api.domain.oauth.v2.domain.UserPrincipal;
import com.blind.api.domain.oauth.v2.info.OAuthUserInfo;
import com.blind.api.domain.oauth.v2.info.OAuthUserInfoFactory;
import com.blind.api.domain.user.domain.User;
import com.blind.api.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User user = super.loadUser(userRequest);

        try {
            return this.process(userRequest, user);
        } catch (AuthenticationException ex) {
            throw ex;
        } catch (Exception ex) {
            ex.printStackTrace();
            throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
        }
    }

    private OAuth2User process(OAuth2UserRequest userRequest, OAuth2User user) {
        ProviderType providerType = ProviderType.keyOf(userRequest.getClientRegistration().getRegistrationId().toUpperCase());

        OAuthUserInfo userInfo = OAuthUserInfoFactory.getOAuth2UserInfo(providerType, user.getAttributes());
        User savedUser = userRepository.findByUserId(userInfo.getId());

        if (savedUser != null) {
            /*
            if (providerType != savedUser.getProviderType()) {
                throw new OAuthProviderMissMatchException(
                        "Looks like you're signed up with " + providerType +
                                " account. Please use your " + savedUser.getProviderType() + " account to login."
                );
            }*/
            updateUser(savedUser, userInfo);
        } else {
            savedUser = createUser(userInfo, providerType);
        }

        return UserPrincipal.create(savedUser, user.getAttributes());
    }

    private User createUser(OAuthUserInfo userInfo, ProviderType providerType) {
        LocalDateTime now = LocalDateTime.now();
        User user = new User(
                userInfo.getId(),
                RoleType.USER
        );

        return userRepository.saveAndFlush(user);
    }

    private User updateUser(User user, OAuthUserInfo userInfo) {
        /*
        if (userInfo.getName() != null && !user.getUsername().equals(userInfo.getName())) {
            user.setUsername(userInfo.getName());
        }

        if (userInfo.getImageUrl() != null && !user.getProfileImageUrl().equals(userInfo.getImageUrl())) {
            user.setProfileImageUrl(userInfo.getImageUrl());
        }
        */
        return user;
    }
}