package com.blind.api.global.utils;

import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.util.Map;

@Configuration
@Setter
@ConfigurationProperties(prefix = "info")
public class ApplicationYmlRead {
    private Map<String,String> van;
    private Map<String,String> web;

    public String getBlame() {
        return van.get("blame");
    }

    public String getHot() {
        return van.get("hot");
    }

    public String getFrontUrl() {
        return web.get("frontUrl");
    }
}
