package com.blind.api.domain.user.v2.controller;

import com.blind.api.common.RestDocsConfiguration;
import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.security.jwt.v1.domain.Token;
import com.blind.api.domain.security.jwt.v1.repository.TokenRepository;
import com.blind.api.domain.security.oauth.v2.repository.UserRefreshTokenRepository;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.domain.user.v2.repository.UserRepository;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.web.servlet.MockMvc;

import javax.transaction.Transactional;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureRestDocs
@AutoConfigureMockMvc
@Import(RestDocsConfiguration.class)
class UserControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    @Mock
    private UserRefreshTokenRepository testTokenRepository;

    @Autowired
    @Mock
    private UserRepository testUserRepository;

    @Autowired
    @Mock
    private TokenRepository tokenRepository;

    private User user;
    private Token token;
    @BeforeEach
    void init(){
        user = testUserRepository.findByHashId("hashId").orElseGet(()->null);
        if (user == null) {
            user = new User();
            user.setHashId("hashId");
            user.setRoleType(RoleType.USER);
            testUserRepository.save(user);
        }
        token = tokenRepository.findByAccessToken("access").orElseGet(()-> null);
        if (token == null) {
            token = new Token();
            token.setAccessToken("access");
            token.setRefreshToken("refresh");
            token.setUser(user);
            testTokenRepository.save(token);
        }
    }

    @Test
    @Transactional
    void getUserInfo() throws Exception{
        mockMvc.perform(get("/user")
                .header("Authorization", "Bearer access"))
                .andExpect(status().isOk())
                .andDo(document("mypage"))
                ;
    }
}