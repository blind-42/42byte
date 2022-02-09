// import { ListWrap, ListRight, ListLeft } from './styled'

import { PostDB } from 'utils/functions/type'
import { PreviewContainer, TitleWrap, PostInfoWrap } from './styled';

// interface dummyProps {
// 	uuid: number
// 	title: string
// 	nickmane: string
// 	createdAt: string
// 	comment: number
// 	view:number
// 	thumsup: number
// 	content: string
// };

type GreetingProps = {
	el: PostDB;
}

function Postpreview({ el }: GreetingProps) {
	const { uuid, title, nickname, createdAt, comment, view, thumsup, content } = el;
	
	return (
		<>
			<PreviewContainer>
				<TitleWrap>{title}</TitleWrap>
				<PostInfoWrap>
					<div>{view}</div>
					<div>{thumsup}</div>
					<div>{nickname}</div>
					<div>{createdAt}</div>
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
