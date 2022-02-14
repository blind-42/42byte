import Header from 'components/Header/Header';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { AppContainer, PageContainer } from 'styles/styled';

function Writing() {

  return (
	<>
		<AppContainer>
			<Header />
			<PageContainer>
				<Editor
					initialValue="hello react editor world!"
					previewStyle="vertical"
				  height="600px"
				  initialEditType="markdown"
				  useCommandShortcut={true} />
			<div>test</div>
			</PageContainer>
		</AppContainer>
	</>
	);
}

export default Writing;