
import Pagination from 'react-js-pagination';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
	console.log(window.scrollY);

	return (
		<>
			<PageContainer>
				<PageNationWrap>
					{/* {window.scrollTo(0, 0)} */}
					{window.scroll({top:0,behavior:'smooth'})}
					<Pagination
							activePage={curPage}
							itemsCountPerPage={1}
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