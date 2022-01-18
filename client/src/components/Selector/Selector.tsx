import { 
	SelContainer,
	Topbar,
	MainContainer,
	Phrases,
	Buttons
} from './styled'

function Selector() {
  return <>
		<SelContainer>
			<Topbar>
			</Topbar>
			<MainContainer>
				<Phrases>로그인이 필요합니다.</Phrases>
				<Buttons>
					<input type="button" className='positive' value="로그인" />
					<input type="button" className='negative' value="취소" />
				</Buttons>
			</MainContainer>
		</SelContainer>
	</>;
}

export default Selector;
