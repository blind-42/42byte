
import Pagination from 'react-js-pagination';
import { PageContainer, PageNationWrap } from './styled'

// type GreetingProps = {
// 	pageData: pageType;
// }

// type pageType = {
// 	page: number,
// 	pages: number
// }

interface GreetingProps {
  curPage: number;
  totalPages: number;
  pageChangeHandler: (page: number) => void;
}

function PageNation({
  curPage,
  totalPages,
  pageChangeHandler,
}: GreetingProps) {
	// const {page, pages} = pageData;
	// console.log(pageData.page);

	return (
		<>
			<PageContainer>
				<PageNationWrap>
					{window.scrollTo(0, 0)}
					<Pagination
							activePage={curPage}
							itemsCountPerPage={24}
							pageRangeDisplayed={5}
							totalItemsCount={totalPages}
							prevPageText="<"
							nextPageText=">"
							onChange={pageChangeHandler}
						/>
				</PageNationWrap>
			</PageContainer>
		</>
	);
}

export default PageNation;