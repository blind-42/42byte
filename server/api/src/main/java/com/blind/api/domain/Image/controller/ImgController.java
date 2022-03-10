package com.blind.api.domain.Image.controller;

import com.blind.api.domain.Image.dto.ImageRequestDTO;
import org.springframework.web.bind.annotation.RequestBody;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

public interface ImgController {

    void SaveImage(@RequestBody ImageRequestDTO imageRequestDTO, HttpServletRequest request);

    }
