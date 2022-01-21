import { Link } from 'react-router-dom';
import { dummy } from '../../components/Table/dummy';
import ListMapping from 'components/ListMapping/ListMapping';
import { TableWrap, Category, TableList } from './styled';

function Table() {
	return (
		<>
			<TableWrap>
				<Category>
					<div className='title'>제목</div>
					<div className='view'>조회</div>
					<div className='thumsup'>추천</div>
					<div className='writer'>글쓴이</div>
					<div className='createdat'>작성일</div>
				</Category>
				<TableList>
					{dummy.map((list) => {
						return (
							<Link to="/post" state={{ data: list}} style={{ color: 'inherit', textDecoration: 'inherit'}}>
								<ListMapping key={list.uuid} 
														uuid={list.uuid} 
														title={list.title} 
														nickmane={list.nickname} 
														createdAt={list.createdAt} 
														comment={list.comment} 
														view={list.view} 
														thumsup={list.thumsup} 
														content={list.content} />
							</Link>
						)
					})}
				</TableList>
			</TableWrap>
		</>
	);
}

export default Table;