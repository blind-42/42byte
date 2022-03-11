package com.blind.api.domain.Image.repository;

import com.blind.api.domain.Image.domain.Image;
import com.blind.api.domain.Image.domain.ImgType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Long> {
    List<Image> findAllByType(ImgType type);
}
