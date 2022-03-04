
import Pagination from 'react-js-pagination';
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoCaretBackSharp, IoCaretForwardSharp } from "react-icons/io5";
import { PageContainer, PageNationWrap } from './styled'

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

	return (
		<>
			<PageContainer>
				<PageNationWrap>
					<Pagination
							activePage={curPage}
							itemsCountPerPage={1}
							pageRangeDisplayed={5}
							totalItemsCount={totalPages}
							firstPageText={<IoPlaySkipBackSharp />}
							lastPageText={<IoPlaySkipForwardSharp/>}
							prevPageText={<IoCaretBackSharp />}
							nextPageText={<IoCaretForwardSharp />}
							onChange={pageChangeHandler}
						/>
				</PageNationWrap>
			</PageContainer>
		</>
	);
}

export default PageNation;