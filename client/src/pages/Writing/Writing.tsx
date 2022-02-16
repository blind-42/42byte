import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
// import Prism from 'prismjs';
// import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import instance from 'utils/functions/axios';
import { ContentData } from 'utils/functions/type';
import { AppContainer, PageContainer, TopBar, PageName, Squares } from 'styles/styled';
import { TitleUploadWrap, EditorWrap, Title, UploadButton } from './styled'

// interface PostBody {
//   title: string
//   content: string
// }

function Writing() {
	const [title, setTitle] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const editorRef = useRef<Editor>(null);
	// const formData = new FormData();
	// console.log(formData);

	const uploadHandler = () => {
		instance
		.post('/post?boardId=1', { title: title, content: content })
		.then((res) => {window.location.href=`/detail?boardId=1&postId=${res.data.id}`})
		.catch((err) => console.log(err));
	}

	const titleHandler = (event: { target: { value: string } }) => {setTitle(event.target.value)};
	const contentHandler = () => {
		setContent(editorRef.current?.getInstance().getMarkdown() || '');
	}
	
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
				<TitleUploadWrap>
					<Title>
						<input onChange={titleHandler} type="text" placeholder='제목을 입력해 주세요.'/>
					</Title>
					<UploadButton>
						<button onClick={uploadHandler}>등록</button>	
					</UploadButton>
				</TitleUploadWrap>
				<EditorWrap>
					<Editor
						initialValue="내용을 입력하세요."
						previewStyle="tab"
						height="80vh"
						initialEditType="markdown"
						useCommandShortcut={true} 
						// hooks={{addImageBlobHook: }}
						onChange={contentHandler}
						ref={editorRef}
					/>
				</EditorWrap>
				<Footer />
			</PageContainer>
		</AppContainer>
	</>
	);
}

export default Writing;