package com.blind.api.domain.security.oauth.v2.service;

import com.blind.api.domain.Image.domain.Image;
import com.blind.api.domain.Image.service.ImageService;
import com.blind.api.domain.security.oauth.v2.domain.ProviderType;
import com.blind.api.domain.security.oauth.v2.domain.UserPrincipal;
import com.blind.api.domain.security.oauth.v2.info.OAuthUserInfo;
import com.blind.api.domain.security.oauth.v2.info.OAuthUserInfoFactory;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;
    private final ImageService imageService;

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
        User savedUser = userRepository.findByHashId(userInfo.getHashId())
                .orElse(null);
        if (savedUser != null)
        {
            /*
            if (providerType != savedUser.getProviderType()) {
                throw new OAuthProviderMissMatchException(
                        "Looks like you're signed up with " + providerType +
                                " account. Please use your " + savedUser.getProviderType() + " account to login."
                );
            }*/
            updateUser(savedUser , userInfo);
        } else {
            savedUser = createUser(userInfo, providerType);
        }

        return UserPrincipal.create(savedUser, user.getAttributes());
    }

    private User createUser(OAuthUserInfo userInfo, ProviderType providerType) {
        LocalDateTime now = LocalDateTime.now();
        ArrayList<Image> profileImage = (ArrayList<Image>) imageService.findProfileImg();
        Collections.shuffle(profileImage);

        String randomUrl = profileImage.get(0).getUrl();
        User user = User.builder()
                .hashId(userInfo.getHashId())
                .roleType(RoleType.USER)
                .profileImageUrl(randomUrl)
                .build();

        return userRepository.saveAndFlush(user);
    }

    private User updateUser(User user, OAuthUserInfo userInfo) {
        if (userInfo.getHashId() != null && !user.getHashId().equals(userInfo.getHashId())) {
            user.setHashId(userInfo.getHashId());
        }
        return user;
    }
}