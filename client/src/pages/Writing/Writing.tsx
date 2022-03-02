import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import '@toast-ui/editor/dist/toastui-editor.css';
import Header from 'components/Header/Header';
import PostEditor from 'components/PostEdit/PostEditor';
import instance from 'utils/functions/axios';
import { RiArrowDownSFill } from 'react-icons/ri'
import { BoardList, BoardPre } from 'utils/functions/type';
import { AppContainer, PageContainer, TopBar, PageName, Squares } from 'styles/styled';
import { ContentWrap, SelectBoard } from './styled';


export default function Writing() {
	const [boardList, setBoardList] = useState<BoardList>({contents: [{id: 0, name: '', isDel: 0, managerId: 0}], page: 0, pages: 0});
	const { contents, page, pages } = boardList;
	const [board, setBoard] = useState('');
	const { isFetching, isLoading, error, data } = useQuery(
		['writing_key', ], () => {
			instance
			.get('/board/list')
			.then((res) => setBoardList(res.data))
		}, {
			retry: 0, 
			refetchOnWindowFocus: false,
			keepPreviousData: true
		}
	);

	// const currentUrl = window.location.href;
	// let defaultBoardId = 0;
	// let defaultBoardName = '';
	// useEffect(() => {
	// 	if (currentUrl.includes('boardId=')) {
	// 		defaultBoardId = +currentUrl.split('boardId=')[1];
	// 	}
	// }, [])


	const boardHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setBoard(event.target.value);
	}
	console.log(board);

	// if (isFetching || isLoading) return <Loading />

	// if (error) return <Error />

  return (
		<>
			<AppContainer>
				<Header />
				<PageContainer>
					<TopBar>
						<PageName>글쓰기</PageName>
						<Squares>
							<div>&#9866;</div>
							<div>&#10064;</div>
							<Link to='/'>
								<div>&times;</div>
							</Link>
						</Squares>
					</TopBar>
					<ContentWrap>
						<SelectBoard>
							<select name='board' onChange={boardHandler}>
								{/* <option value={defaultBoardId} key='0'>==== 선택 ====</option> */}
								{contents.map((el: BoardPre, idx) => {
									return (
										<option value={el.id} key={idx}>{el.name}</option>
									)
								})}
							</select>
							<div><RiArrowDownSFill/></div>
						</SelectBoard>
						<PostEditor boardId={+board}/>
					</ContentWrap>
				</PageContainer>
			</AppContainer>
		</>
	);
}
