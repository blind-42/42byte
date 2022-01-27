package com.blind.api.domain.post.v1.service;

import com.blind.api.domain.post.v1.domain.entity.PostEntity;
import com.blind.api.domain.post.v1.domain.repository.PostRepository;
import com.blind.api.domain.post.v1.dto.PostDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class PostService {
    private final PostRepository postRepository;

    @Transactional
    public List<PostDto> getPostList() {
        List<PostEntity> postEntities = postRepository.findAll();
        List<PostDto> postDtoList = new ArrayList<>();

        for (PostEntity postEntity : postEntities) {
            PostDto postDto = PostDto.builder()
                    .postIdx(postEntity.getPostIdx())
                    .author_id(postEntity.getAuthor_id())
                    .title(postEntity.getTitle())
                    .content(postEntity.getContent())
                    .viewCnt(postEntity.getViewCnt())
                    .likeCnt(postEntity.getLikeCnt())
                    .isNotice(postEntity.getIsNotice())
                    .blameCnt(postEntity.getBlameCnt())
                    .createdDate(postEntity.getCreatedDate())
                    .modifiedDate(postEntity.getModifiedDate())
                    .build();

            postDtoList.add(postDto);
        }

        return postDtoList;
    }

    @Transactional
    public PostDto getPost(Long postIdx) {
        Optional<PostEntity> postEntityWrapper = postRepository.findById(postIdx);
        PostEntity postEntity = postEntityWrapper.get();

        PostDto postDTO = PostDto.builder()
                .postIdx(postEntity.getPostIdx())
                .author_id(postEntity.getAuthor_id())
                .title(postEntity.getTitle())
                .content(postEntity.getContent())
                .viewCnt(postEntity.getViewCnt())
                .likeCnt(postEntity.getLikeCnt())
                .isNotice(postEntity.getIsNotice())
                .blameCnt(postEntity.getBlameCnt())
                .createdDate(postEntity.getCreatedDate())
                .modifiedDate(postEntity.getModifiedDate())
                .build();

        return postDTO;
    }



    @Transactional
    public Long savePost(PostDto postDto) {
        return postRepository.save(postDto.toEntity()).getPostIdx();
    }

    @Transactional
    public void deletePost(Long postIdx) {
        postRepository.deleteById(postIdx);
    }

    @Transactional
    public void updateView(Long postIdx) {
        postRepository.updateView(postIdx);
    }
}