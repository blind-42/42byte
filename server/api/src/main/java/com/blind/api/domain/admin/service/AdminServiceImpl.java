package com.blind.api.domain.admin.service;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class AdminServiceImpl implements AdminService{
    @Override
    @Transactional
    public void setAdmin(User user) {
        user.setRoleType(RoleType.ADMIN);
    }

    @Override
    @Transactional
    public void deleteAdmin(User user) {
        user.setRoleType(RoleType.USER);
    }
}
