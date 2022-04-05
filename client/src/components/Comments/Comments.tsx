import React from 'react';
import { useState, useEffect } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import instance from 'utils/functions/axios';
import DropdownMenu from 'components/DropdownMenu/DropdownMenu';
import CommentInput from 'components/CommentInput/CommentInput';
import ReComments from './ReComments';
import { CommentData, RecommentData } from 'utils/functions/type';
import {
  timeForToday,
  isDelOption,
  whoIsWriter,
} from 'utils/functions/functions';
import { GrLike } from 'react-icons/gr';
import {
  CommentWrap,
  ModifyCommentWrap,
  CommentTop,
  Info,
  Modify,
  Content,
  CommentBottom,
  ReCommentBox,
  LikesBox,
  GLine,
  FLine,
  ReCommentWrap,
  RecommentContainer,
} from './styled';

type GreetingProps = {
  roleType: string;
  comment: CommentData;
  commentsUserList: number[];
};

function Comments({ roleType, comment, commentsUserList }: GreetingProps) {
  const {
    postId,
    id,
    authorId,
    content,
    likeCnt,
    blameCnt,
    isUsers,
    isAuthor,
    isLiked,
    isDel,
    createdDate,
    modifiedDate,
    recomments,
  } = comment;
  const [boxState, setBoxState] = useState<boolean>(isLiked);
  const [openEditor, setOpenEditor] = useState<boolean>(false);
  const [openReCmt, setOpenReCmt] = useState<boolean>(false);
  const writer = whoIsWriter(isAuthor, commentsUserList, authorId);

  const queryClient = useQueryClient();
  const mutationPost = useMutation(
    ({ path, data }: { path: string; data?: object }) =>
      instance.post(path, data),
  );
  const mutationDelete = useMutation(({ path }: { path: string }) =>
    instance.delete(path),
  );
  const mutationPut = useMutation(
    ({ path, data }: { path: string; data?: object }) =>
      instance.put(path, data),
  );

  useEffect(() => {
    if (openReCmt) {
      window.addEventListener(
        'click',
        () => {
          setOpenReCmt(false);
        },
        { once: true },
      );
    }
  });

  const modifyCmtHandler = () => {
    setOpenEditor(!openEditor);
  };

  const openReCmtHandler = () => {
    setOpenReCmt(!openReCmt);
  };

  const updateCmtHandler = (comment: string) => {
    mutationPut.mutate(
      { path: `/comment?commentId=${id}`, data: { content: comment } },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['comment_key']);
          setOpenEditor(!openEditor);
        },
        onError: () => {
          window.location.href = '/error';
        },
      },
    );
  };

  const uploadReCmtHandler = (comment: string) => {
    mutationPost.mutate(
      { path: `recomment?commentId=${id}`, data: { content: comment } },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['comment_key']);
          setOpenReCmt(!openReCmt);
        },
        onError: () => {
          window.location.href = '/error';
        },
      },
    );
  };

  const deleteCmtHandler = () => {
    mutationDelete.mutate(
      { path: `/comment?commentId=${id}` },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['comment_key']);
        },
        onError: () => {
          window.location.href = '/error';
        },
      },
    );
  };

  const reportHandler = (reportIssue: string) => {
    if (reportIssue) {
      mutationPost.mutate(
        { path: `/post/blame?postId=${id}`, data: { issue: reportIssue } },
        {
          onSuccess: () => {
            alert('신고가 정상적으로 처리되었습니다.');
            window.location.href = '/blindboard?page=1';
          },
          onError: () => {
            window.location.href = '/error';
          },
        },
      );
    }
  };

  const boxColorHandler = () => {
    mutationPost.mutate(
      {
        path: `/comment/like?postId=${postId}&commentId=${id}`,
        data: undefined,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['comment_key']);
          setBoxState(!boxState);
        },
        onError: () => {
          window.location.href = '/error';
        },
      },
    );
  };

  return (
    <>
      {openEditor ? (
        <ModifyCommentWrap>
          <CommentTop>
            <Info isUsers={isUsers}>
              <h3>{writer}</h3>
            </Info>
            <Modify>
              <div onClick={modifyCmtHandler}>취소</div>
            </Modify>
          </CommentTop>
          <Content>
            <CommentInput
              submitCmtHandler={updateCmtHandler}
              defaultContent={content}
            />
          </Content>
        </ModifyCommentWrap>
      ) : (
        <CommentWrap>
          <CommentTop>
            <Info isUsers={isUsers}>
              <h3>{writer}</h3>
              <div>
                {timeForToday(createdDate, 'comment')}{' '}
                {createdDate !== modifiedDate && '수정됨'}
              </div>
            </Info>
            {!isDel && (
              <DropdownMenu
                isPost={false}
                isUsers={isUsers}
                roleType={roleType}
                modifyHandler={modifyCmtHandler}
                deleteHandler={deleteCmtHandler}
                reportHandler={reportHandler}
              />
            )}
          </CommentTop>
          <Content>
            {isDel ? (
              <div className="isDel">
                &#9986; {isDelOption(isDel)}삭제된 댓글입니다.
              </div>
            ) : blameCnt >= 5 ? (
              <div className="isDel">
                &#10754; 신고누적으로 숨김처리된 댓글입니다.
              </div>
            ) : (
              <div>{content}</div>
            )}
          </Content>
          <CommentBottom>
            <ReCommentBox openReCmt={openReCmt} onClick={openReCmtHandler}>
              답글
            </ReCommentBox>
            <LikesBox boxState={boxState} onClick={boxColorHandler}>
              <div>
                <GrLike />
              </div>
              <div>{likeCnt}</div>
            </LikesBox>
          </CommentBottom>
        </CommentWrap>
      )}
      {openReCmt && (
        <>
          <GLine />
          <FLine />
          <RecommentContainer onClick={(e) => e.stopPropagation()}>
            <span>&#8627;</span>
            <ReCommentWrap>
              <CommentInput
                submitCmtHandler={uploadReCmtHandler}
                placeholder={`@${writer} 에게 댓글을 입력하세요.`}
              />
            </ReCommentWrap>
          </RecommentContainer>
        </>
      )}
      {recomments.map((el: RecommentData) => {
        return (
          <ReComments
            key={el.id}
            roleType={roleType}
            recomment={el}
            commentsUserList={commentsUserList}
          />
        );
      })}
      <GLine />
      <FLine />
    </>
  );
}

export default React.memo(Comments);
