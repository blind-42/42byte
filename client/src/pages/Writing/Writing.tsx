import { Link } from 'react-router-dom';
// import Prism from 'prismjs';
// import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import PostEditor from 'components/PostEdit/PostEditor';
import { AppContainer, PageContainer, TopBar, PageName, Squares } from 'styles/styled';


function Writing() {
  return (
		<>
			<AppContainer>
				<Header />
				<PageContainer>
					<TopBar>
						<PageName>글쓰기</PageName>
						<Squares>
							<div>&#9866;</div>
							<div>&#10064;</div>
							<Link to='/'>
								<div>&times;</div>
							</Link>
						</Squares>
					</TopBar>
					<PostEditor/>
					<Footer />
				</PageContainer>
			</AppContainer>
		</>
	);
}

export default Writing;