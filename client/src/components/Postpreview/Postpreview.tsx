import { Link } from 'react-router-dom';
import { PostDB } from 'utils/functions/type'
import { PreviewContainer, TitleWrap, PostInfoWrap } from './styled';
// import { ListWrap, ListRight, ListLeft } from './styled'

type GreetingProps = {
	postDB: PostDB;
}

function Postpreview({ postDB }: GreetingProps) {
	const { createdDate, modifiedDate, id, authorId, title, content, commentCnt, viewCnt, likeCnt, isNotice, blameCnt } = postDB;

	return (
		<>
			<PreviewContainer>
				<TitleWrap>
					<Link to='/detail' state={{postDB}}> 
						<div>{title}</div>
					</Link>
				</TitleWrap>
				<PostInfoWrap>
					<div>{viewCnt}</div>
					<div>{likeCnt}</div>
					<div>{authorId}</div>
					<div>{createdDate.slice(0, 10)}</div>
				</PostInfoWrap>
			</PreviewContainer>
		</>
	);
	// return (
	// 	<>
	// 		<ListWrap>
	// 			<ListLeft>
	// 				<div className='listTitle'>{dummy.title}</div>
	// 				<div className='listComment'>({dummy.comment})</div>
	// 			</ListLeft>
	// 			<ListRight>
	// 			<div className='listView'>
	// 				{dummy.view}
	// 			</div>
	// 			<div className='listThumsup'>
	// 				{dummy.thumsup}
	// 			</div>
	// 			<div className='listWriter'>
	// 				카뎃
	// 			</div>
	// 			<div className='listCreatedat'>
	// 				{dummy.createdAt.slice(0, 10)}
	// 			</div>
	// 			</ListRight>
	// 		</ListWrap>
	// 	</>
	// );
}

export default Postpreview;
