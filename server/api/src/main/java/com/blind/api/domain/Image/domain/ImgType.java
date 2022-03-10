package com.blind.api.domain.Image.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum ImgType {

    PROFILE("profile", "프로필 이미지", 1),
    ECT("ect", "기타", 99);

    private final String key;
    private final String displayName;
    private final Integer value;

    public static ImgType of(String key) {
        return Arrays.stream(ImgType.values())
                .filter(r -> r.getKey().equals(key))
                .findAny()
                .orElse(ECT);
    }
}
