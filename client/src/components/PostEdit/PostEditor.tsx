import { useState, useRef, useEffect } from 'react'
import { Editor } from '@toast-ui/react-editor';
import instance from 'utils/functions/axios';
import { PostData } from 'utils/functions/type';
import { EditorContainer, TitleUploadWrap, EditorWrap, Title, UploadButton } from './styled'

type PostDataType = {
  detailData? : PostData
	boardId: number
}

export default function PostEditor({ detailData, boardId }: PostDataType) {
  const [title, setTitle] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const editorRef = useRef<Editor>(null);
  const currentUrl = window.location.href;
	const urlId = currentUrl.split('&postId=')[1];

  useEffect(() => {
    if (detailData) {
      editorRef.current?.getInstance().setMarkdown(detailData.content)
      setTitle(detailData.title)
      setContent(detailData.content)
    }
  },[])

	const uploadHandler = () => {
		if (window.location.pathname === '/writing') {
			instance
			.post(`/post?boardId=${boardId}`, { title: title, content: content })
			.then((res) => window.location.href=`/detail?boardId=${boardId}&postId=${res.data.id}`)
			.catch((err) => console.log(err));
    }
    else {
			instance
			.put(`/post?boardId=${boardId}&postId=${detailData?.id}`, { title: title, content: content })
			.then(() => window.location.href=`/detail?boardId=${boardId}&postId=${urlId}`)
			.catch((err) => console.log(err));
    }
	}

	const titleHandler = (event: { target: { value: string } }) => {setTitle(event.target.value)};
	const contentHandler = () => {
		setContent(editorRef.current?.getInstance().getMarkdown() || '');
	}
  return (
		<>
			<EditorContainer>
			<TitleUploadWrap>
				<Title>
					<input onChange={titleHandler} type="text" placeholder='제목을 입력해 주세요.' value={title}/>
				</Title>
				<UploadButton>
					<button onClick={uploadHandler}>등록</button>
				</UploadButton>
			</TitleUploadWrap>
			<EditorWrap>
				<Editor
					initialValue={content}
					previewStyle="tab"
					height="70vh"
					initialEditType="markdown"
					useCommandShortcut={true}
					// hooks={{addImageBlobHook: }}
					onChange={contentHandler}
					ref={editorRef}
				/>
			</EditorWrap>
			</EditorContainer>
    </>
  )
}