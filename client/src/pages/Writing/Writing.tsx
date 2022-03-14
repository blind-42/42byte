import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import '@toast-ui/editor/dist/toastui-editor.css';
import Header from 'components/Header/Header';
import PostEditor from 'components/PostEdit/PostEditor';
import Error from 'pages/Error/Error';
import instance from 'utils/functions/axios';
import { RiArrowDownSFill } from 'react-icons/ri';
import { BoardList, BoardPre } from 'utils/functions/type';
import {
  AppContainer,
  PageContainer,
  TopBar,
  PageName,
  Squares,
} from 'styles/styled';
import { ContentWrap, SelectBoard } from './styled';

export default function Writing() {
  const [boardList, setBoardList] = useState<BoardList>({
    contents: [{ id: 0, name: '', isDel: 0, managerId: 0 }],
    page: 0,
    pages: 0,
  });
  const { contents, page, pages } = boardList;
  const [board, setBoard] = useState('1');
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery(
    ['writing_key'],
    () => {
      instance.get('/board/list').then((res) => {
        const currentUrl = window.location.href;
        setBoardList(res.data);
        if (currentUrl.includes('boardId=')) {
          const defaultBoardId = +currentUrl.split('boardId=')[1];
          setBoard(
            res.data.contents.filter(
              (el: BoardPre) => el.id === defaultBoardId,
            )[0].id,
          );
        }
      });
    },
    {
      retry: 0,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  );

  const boardHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBoard(event.target.value);
  };

  if (error) return <Error />;

  return (
    <>
      <AppContainer>
        <PageContainer>
          <TopBar>
            <PageName>글쓰기</PageName>
            <Squares>
              <div>&#9866;</div>
              <div>&#10064;</div>
              <div onClick={() => navigate(-1)}>&times;</div>
            </Squares>
          </TopBar>
          <ContentWrap>
            <SelectBoard>
              <select name="board" onChange={boardHandler} value={board}>
                {contents.map((el: BoardPre, idx) => {
                  return (
                    <option value={el.id} key={idx}>
                      {el.name}
                    </option>
                  );
                })}
              </select>
              <div>
                <RiArrowDownSFill />
              </div>
            </SelectBoard>
            <PostEditor boardId={Number(board)} />
          </ContentWrap>
        </PageContainer>
        <Header />
      </AppContainer>
    </>
  );
}
