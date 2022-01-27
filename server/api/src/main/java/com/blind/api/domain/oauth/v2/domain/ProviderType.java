package com.blind.api.domain.oauth.v2.domain;

import lombok.Getter;

@Getter
public enum ProviderType {
    FORTYTWO("42"),
    SLACK("slack");

    private String key;

    ProviderType(String key) {
        this.key = key;
    }

    public String getKey() {
        return key;
    }

    public static ProviderType keyOf(String key) {
        for (ProviderType value : ProviderType.values()) {
            if (value.key.equalsIgnoreCase(key)) {
                return value;
            }
        }
        return null;
    }
}

