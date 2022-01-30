import { ListWrap } from './styled'

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
				<div className='listTitle'>
					<span>{dummy.title}</span>
					<span className='listComment'> ({dummy.comment})</span>
				</div>
				<div className='listView'>{dummy.view}</div>
				<div className='listThumsup'>{dummy.thumsup}</div>
				<div className='listWriter'>카뎃</div>
				<div className='listCreatedat'>{dummy.createdAt.slice(0, 10)}</div>
			</ListWrap>
		</>
	);
}

export default ListMapping