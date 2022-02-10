import { CommentWrap, CommentTop, Content } from './styled'

function Comments () {
	return (
		<CommentWrap>
			<CommentTop>
				<div className='left'>
					<div className='name'>카뎃2</div>
					<div className='date'>2021-11-21 15:25</div>
				</div>
				<div className='right'>
					<div>수정</div>
					<div>삭제</div>
				</div>
			</CommentTop>
			<Content>
				<div>댓글 내용입니다.</div>
			</Content>
		</CommentWrap>
	);
}

export default Comments