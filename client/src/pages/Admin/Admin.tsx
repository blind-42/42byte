import { Link } from "react-router-dom";
import Header from "components/Header/Header";
import { AppContainer, PageContainer, PageName, Squares, TopBar } from "styles/styled";
import { MenuContentWrap,  MenuWrap, ContentWrap } from "./styled";
export default function Admin () {
	const switchToUser = () =>{}

	const switchToBoard = () => {}

	const switchToPost = () => {}

	const switchToComment = () => {}

	return (
		<>
			<AppContainer>
				<Header />
				<PageContainer>
					<TopBar>
						<PageName>관리자 페이지</PageName>
						<Squares>
							<div>&#9866;</div>
							<div>&#10064;</div>
							<Link to='/'>
								<div>&times;</div>
							</Link>
						</Squares>
					</TopBar>
					<MenuContentWrap>
						<MenuWrap>
							<div>
								<button onClick={switchToUser}>사용자 관리</button>
							</div>
							<div>
								<button onClick={switchToBoard}>삭제된 게시판</button>
							</div>
							<div>
								<button onClick={switchToPost}>삭제된 게시글</button>
							</div>
							<div>
								<button onClick={switchToComment}>삭제된 댓글</button>
							</div>
						</MenuWrap>
						<ContentWrap>	
						</ContentWrap>
					</MenuContentWrap>
				</PageContainer>
			</AppContainer>
		</>
	);
}