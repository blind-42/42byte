package com.blind.api.domain.Image.controller;

import com.blind.api.domain.Image.domain.Image;
import com.blind.api.domain.Image.dto.ImageRequestDTO;
import com.blind.api.domain.Image.service.ImageService;
import com.blind.api.domain.security.jwt.v1.service.TokenService;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.global.exception.BusinessException;
import com.blind.api.global.utils.HeaderUtil;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@AllArgsConstructor
public class ImgControllerImpl implements ImgController{
    private final TokenService tokenService;
    private final ImageService imageService;

    @RequestMapping(value={"/image"}, method= RequestMethod.POST)
    public void SaveImage(ImageRequestDTO imageRequestDTO, HttpServletRequest request) {
        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));

        if (user.getRoleType() != RoleType.ADMIN)
            throw new BusinessException("{invalid.request}");
        imageService.saveImg(imageRequestDTO.getUrl(), imageRequestDTO.getType());
    }

    @RequestMapping(value={"/image"}, method= RequestMethod.GET)
    public List<Image> GetImage(ImageRequestDTO imageRequestDTO, HttpServletRequest request) {
//        User user = tokenService.findUserByAccessToken(HeaderUtil.getAccessToken(request));

        List<Image> profileImage = imageService.findProfileImg();
//        if (user.getRoleType() != RoleType.ADMIN)
//            throw new BusinessException("{invalid.request}");
        return imageService.findAll();
    }
}
