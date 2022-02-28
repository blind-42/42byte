package com.blind.api.global.utils;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "van")
public class ApplicationYmlRead {
    private String blame;

    public String getBlame() {
        return blame;
    }

    public void setBlame(String blame) {
        this.blame = blame;
    }
}
