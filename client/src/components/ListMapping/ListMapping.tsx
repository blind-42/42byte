import { ListWrap, ListRight, ListLeft } from './styled'

interface dummyProps {
	uuid: number
	title: string
	nickmane: string
	createdAt: string
	comment: number
	view:number
	thumsup: number
	content: string
};

function ListMapping(dummy:dummyProps) {
	return (
		<>
			<ListWrap>
				<ListLeft>
					<div className='listTitle'>{dummy.title}</div>
					<div className='listComment'>({dummy.comment})</div>
				</ListLeft>
				<ListRight>
				<div className='listView'>
					{dummy.view}
				</div>
				<div className='listThumsup'>
					{dummy.thumsup}
				</div>
				<div className='listWriter'>
					카뎃
				</div>
				<div className='listCreatedat'>
					{dummy.createdAt.slice(0, 10)}
				</div>
				</ListRight>
			</ListWrap>
		</>
	);
}

export default ListMapping;
