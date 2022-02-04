package com.blind.api.domain.post.v1.service;

import com.blind.api.domain.post.v1.domain.entity.PostEntity;
import com.blind.api.domain.post.v1.domain.repository.PostRepository;
import com.blind.api.domain.post.v1.dto.PostDto;
import com.blind.api.domain.user.domain.User;
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

    /*모든 게시글 불러오기*/
    @Transactional
    public List<PostDto> getPostList() {
        List<PostEntity> postEntities = postRepository.findAll();
        List<PostDto> postDtoList = new ArrayList<>();

        for (PostEntity postEntity : postEntities) {
            PostDto postDto = PostDto.builder()
                    .postIdx(postEntity.getPostIdx())
                    .userSeq(postEntity.getUserSeq())
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

    /*게시글 정보 불러오기*/
    @Transactional
    public PostDto getPost(Long postIdx) {
        Optional<PostEntity> postEntityWrapper = postRepository.findById(postIdx);
        PostEntity postEntity = postEntityWrapper.orElseThrow(NullPointerException::new);

        PostDto postDTO = PostDto.builder()
                .postIdx(postEntity.getPostIdx())
                .userSeq(postEntity.getUserSeq())
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


    /*게시글 저장*/
    @Transactional
    public Long savePost(PostDto postDto) {
//        postDto.setUser(userSeq);
        return postRepository.save(postDto.toEntity()).getPostIdx();
    }

    /*게시글 삭제*/
    @Transactional
    public void deletePost(Long postIdx) {
        postRepository.deleteById(postIdx);
    }

    /*조회수 증가 */
    @Transactional
    public void updateView(Long postIdx) {
        postRepository.updateView(postIdx);
    }
}