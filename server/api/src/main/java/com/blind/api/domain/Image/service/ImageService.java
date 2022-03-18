package com.blind.api.domain.Image.service;

import com.blind.api.domain.Image.domain.Image;
import com.blind.api.domain.Image.domain.ImgType;

import java.util.List;

public interface ImageService {
    Image       saveImg(String url, ImgType type);
    List<Image> findAll();
    List<Image> findProfileImg();
    }
