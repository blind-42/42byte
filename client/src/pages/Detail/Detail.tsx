import Menubar from 'components/Menubar/Menubar';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Comments from 'components/Comments/Comments';
import { useState } from 'react';
import { AppContainer, Left, Right, MainContainer
				, PostWrap, Title, Detail, ContentWrap, LikesWrap, LikesBox
				, CommentContainer, CommentInput
				, CommentList } from './styled'

function Post() {

	const [boxState, setBoxState] = useState<boolean>(false);
	const [msg, setMsg] = useState<string>('');

	const boxcolorHandler = () => {
		console.log(boxState);
		setBoxState(!boxState);
	}

	const msgHandler = (e: any) => {
		setMsg(e.target.value);
	}

  return (
		<AppContainer>
      <Left>
        {/* <Menubar /> */}
      </Left>
      <Right>
        <Header />
        <MainContainer>
					<PostWrap>
						<Title>
							<div>여기가 제목입니다.</div>
						</Title>
						<Detail>
							<div className='left'>
								<div>카뎃1</div>
								<div>2021-11-21 15:25:31</div>
								<div>조회 56</div>
							</div>
							<div className='right'>
								<div>수정</div>
								<div>삭제</div>
							</div>
						</Detail>
						<ContentWrap>
							<div>레너드 혜성의 정식 명칭은 C/2021 A ...</div>
						</ContentWrap>
						<LikesWrap>
							<LikesBox boxState={boxState} onClick={boxcolorHandler}>
								<div className='likesIcon'>&#128077;</div>
								<div className={boxState? 'CountRed' : 'CountGray'}>27</div>
							</LikesBox>
						</LikesWrap>
					</PostWrap>
					<CommentContainer>
						<div className='commentCount'>댓글 13</div>
						<CommentInput>
							<textarea placeholder='댓글을 입력하세요.' onChange={msgHandler}></textarea> 
							<button>등록</button>
						</CommentInput>
						<CommentList>
							{/* 목업 */}
							<Comments />
							<Comments />
							<Comments />
						</CommentList>
					</CommentContainer>
				</MainContainer>
			</Right>
			<Footer />
		</AppContainer>
	);
}

export default Post;