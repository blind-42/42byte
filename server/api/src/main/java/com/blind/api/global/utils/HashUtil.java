package com.blind.api.global.utils;

import com.google.common.hash.HashFunction;
import com.google.common.hash.Hashing;
import groovy.util.logging.Slf4j;
import jdk.jfr.Unsigned;

import java.nio.charset.StandardCharsets;


@Slf4j
public class HashUtil {
    public static Long getHashId(Long Id, Long salt) {

//        log.info();
        return Hashing.sipHash24(Id, salt).hashString(Id.toString(), StandardCharsets.UTF_8).asLong();
    }
}

