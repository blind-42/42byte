package com.blind.api.domain.user.v2.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum RoleType {

    ADMIN("ROLE_ADMIN", "관리자", 3),
    MANAGER("ROLE_MANAGER", "게시판 매니저", 2),
    USER("ROLE_USER", "일반 사용자", 1);

    private final String key;
    private final String displayName;
    private final Integer value;

    public static RoleType of(String key) {
        return Arrays.stream(RoleType.values())
                .filter(r -> r.getKey().equals(key))
                .findAny()
                .orElse(USER);
    }
}
