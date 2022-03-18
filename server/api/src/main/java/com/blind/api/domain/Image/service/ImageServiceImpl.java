package com.blind.api.domain.Image.service;

import com.blind.api.domain.Image.domain.Image;
import com.blind.api.domain.Image.domain.ImgType;
import com.blind.api.domain.Image.repository.ImageRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@AllArgsConstructor
public class ImageServiceImpl implements ImageService {
    private final ImageRepository imageRepository;

    @Override
    @Transactional
    public Image saveImg(String url, ImgType type) {
        return imageRepository.save(new Image(url, type));
    }

    @Override
    @Transactional
    public List<Image> findAll() {
        return imageRepository.findAll();
    }

    @Override
    @Transactional
    public List<Image> findProfileImg() {
        return imageRepository.findAllByType(ImgType.PROFILE);
    }
}
