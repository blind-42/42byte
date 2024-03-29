package com.blind.api.domain.post.v2.service;

import com.blind.api.domain.board.v1.domain.Board;
import com.blind.api.domain.post.v2.domain.Post;
import com.blind.api.domain.post.v2.dto.PostDTO;
import com.blind.api.domain.post.v2.dto.PostResponseDTO;
import com.blind.api.domain.post.v2.repository.PostRepository;
import com.blind.api.domain.user.v2.domain.RoleType;
import com.blind.api.domain.user.v2.domain.User;
import com.blind.api.global.exception.BusinessException;
import com.blind.api.global.utils.ApplicationYmlRead;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class PostServiceImpl implements PostService {
    private final PostRepository postRepository;
    private final ApplicationYmlRead applicationYmlRead;

    @Override
    @Transactional
    public Post save(Board board, User user, String title, String content, Boolean isImage) {
        Post post = Post.builder()
                .board(board)
                .title(title)
                .content(content)
                .authorId(user.getId())
                .viewId(board.getViewId())
                .isImage(isImage)
                .build();
        return postRepository.save(post);
    }

    @Override
    @Transactional
    public Post findById(Long postId) {
        return postRepository.findById(postId).orElseThrow(() -> new BusinessException("{post.notfound}"));
    }

    @Override
    @Transactional
    public Page<Post> findAllByBoardId(Long boardId, User user, Pageable pageable) {
        Long blame = Long.parseLong(applicationYmlRead.getBlame());
        Page<Post> postList = postRepository.findPostForUser(boardId, 0, blame, user.getId(), pageable);

        return postList;
    }

    @Override
    @Transactional
    public Page<Post> search(Long boardId, User user, String keyword, Pageable pageable) {
        Long blame = Long.parseLong(applicationYmlRead.getBlame());
        if (boardId == 0)
            return postRepository.findPostsWithKeyword(0, blame, user.getId(), keyword, pageable);
        return postRepository.findPostsWithKeywordByBoard(boardId, 0, blame, user.getId(), keyword, pageable);
    }

    @Override
    @Transactional
    public Page<Post> findPostByIdIn(User user, Pageable pageable) {
        return postRepository.findAllByAuthorIdAndIsDelEquals(user.getId(), 0, pageable);
    }

    @Override
    @Transactional
    public Page<Post> findLikePostByUserId(Long userId, Pageable pageable){
        return postRepository.findAllPostLikeByUserId(userId, pageable);
    }

    @Override
    @Transactional
    public Page<Post> findAllHot(Pageable pageable) {
        Long blame = Long.parseLong(applicationYmlRead.getBlame());
        Long hot = Long.parseLong(applicationYmlRead.getHot());

        return postRepository.findAllByLikeCntGreaterThanEqualAndIsDelEqualsAndBlameCntLessThanAndIsNoticeNot(hot, 0, blame, true, pageable);
    }

    @Override
    @Transactional
    public Page<Post> findDeleted(Pageable pageable) {
        return postRepository.findAllByIsDelEquals(1, pageable);
    }

    @Override
    @Transactional
    public Page<Post> findBlamed(Pageable pageable) {
        return postRepository.findAllByBlameCntGreaterThanEqual(1L, pageable);
    }

    @Override
    @Transactional
    public Page<Post> findBlocked(Pageable pageable) {
        String blame = applicationYmlRead.getBlame();
        return postRepository.findAllByBlameCntGreaterThanEqualOrIsDelGreaterThanEqual(Long.parseLong(blame), 2, pageable);
    }

    @Override
    @Transactional
    public void setNotice(Post post) {
        post.setIsNotice(true);
    }

    @Override
    @Transactional
    public void setHot(Post post) {
        post.setHotDateTime(LocalDateTime.now());
    }

    @Override
    @Transactional
    public void updatePost(Post post, String title, String content, Boolean isImage) {
        post.setTitle(title);
        post.setContent(content);
        post.setIsImage(isImage);
    }

    @Override
    @Transactional
    public void updateComment(Long id, Long add) {
        postRepository.updateComment(id, add);
    }

    @Override
    @Transactional
    public void updateLike(Long id, Long add) {
        postRepository.updateLike(id, add);
    }

    @Override
    @Transactional
    public void updateView(Long id) {
        postRepository.updateView(id);
    }

    @Override
    @Transactional
    public void addBlameCnt(Long id) {
        postRepository.addBlameCnt(id);
    }

    @Override
    @Transactional
    public void deleteNotice(Post post) {
        post.setIsNotice(false);
    }

    /*영구 삭제*/
    @Override
    @Transactional
    public void deletePost(Post post) {
        postRepository.deleteById(post.getId());
    }

    /*isDel 변경*/
    @Override
    @Transactional
    public void delete(Post post, Integer type) {
        post.setIsDel(type);
    }

    @Override
    @Transactional
    public void restorePost(Post post) {
        if (post.getIsDel() > 0)
            post.setIsDel(0);
        else if (post.getBlameCnt() >= 5)
            post.setBlameCnt(0L);
    }
}