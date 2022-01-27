package com.blind.api.domain.oauth.v2.info;

import com.blind.api.domain.oauth.v2.domain.ProviderType;
import com.blind.api.domain.oauth.v2.info.impl.FortyTwoOAuthUserInfo;

import java.util.Map;

public class OAuthUserInfoFactory {
    public static OAuthUserInfo getOAuth2UserInfo(ProviderType providerType, Map<String, Object> attributes) {
        switch (providerType) {
            case FORTYTWO: return new FortyTwoOAuthUserInfo(attributes);
            //case SLACK: return new FacebookOAuth2UserInfo(attributes);
            default: throw new IllegalArgumentException("Invalid Provider Type.");
        }
    }
}