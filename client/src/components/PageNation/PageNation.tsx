
import Pagination from 'react-js-pagination';
import { PageNationWrap } from './styled'

type GreetingProps = {
	pageData: pageType;
}

type pageType = {
	page: number,
	pages: number
}

function PageNation({pageData} : GreetingProps) {
	const {page, pages} = pageData;
	console.log(pageData.page);

	return (
		<>
		<PageNationWrap>
			{window.scrollTo(0, 0)}
			<Pagination
					activePage={pages}
					itemsCountPerPage={24}
					pageRangeDisplayed={5}
					totalItemsCount={page}
					prevPageText="<"
					nextPageText=">"
					onChange={()=>{console.log(page)}}
				/>
		</PageNationWrap>
		</>
	);
}

export default PageNation;