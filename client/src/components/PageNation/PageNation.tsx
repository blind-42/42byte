import { PageNationWrap } from './styled'

type GreetingProps = {
	pageData: object;
}

function PageNation({pageData} : GreetingProps) {

	// console.log(pageData);

	return (
		<>
		<PageNationWrap># PageNation #</PageNationWrap>
		</>
	);
}

export default PageNation;