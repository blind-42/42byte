package com.blind.api.domain.post.v2.dto;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.post.v2.domain.Post;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class PostResponseDTO {
    private List<PostDTO> contents;
    private int page;
    private int pages;

    public PostResponseDTO(){
        this.contents = new ArrayList<PostDTO>();
        this.page = 0;
        this.pages = 0;
    }
//    @Builder
//    private PostResponseDTO(Long id, Long authorId, String title, Long commentCnt, Long viewCnt, Long likeCnt, Boolean isNotice, Long blameCnt, LocalDateTime createdDate, LocalDateTime modifiedDate) {
//        this.postDto.id = id;
//        this.postDto.authorId = authorId;
//        this.postDto.title = title;
//        this.postDto.commentCnt = commentCnt;
//        this.postDto.viewCnt = viewCnt;
//        this.postDto.likeCnt = likeCnt;
//        this.postDto.isNotice = isNotice;
//        this.postDto.blameCnt = blameCnt;
//        this.postDto.createdDate = createdDate;
//        this.postDto.modifiedDate = modifiedDate;
//    }
}

