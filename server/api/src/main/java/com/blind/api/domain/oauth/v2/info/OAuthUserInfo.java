package com.blind.api.domain.oauth.v2.info;

import java.util.Map;

public abstract class OAuthUserInfo {
    protected Map<String, Object> attributes;

    public OAuthUserInfo(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    public Map<String, Object> getAttributes() {
        return attributes;
    }

    public abstract String getId();

    public abstract String getImageUrl();
}