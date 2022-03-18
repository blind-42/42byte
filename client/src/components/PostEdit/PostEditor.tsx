import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import S3 from 'react-aws-s3-typescript';
import { v4 as uuidv4 } from 'uuid';
import { useMediaQuery } from 'react-responsive';
import { Editor } from '@toast-ui/react-editor';
import instance from 'utils/functions/axios';
import { PostData } from 'utils/functions/type';
import {
  EditorContainer,
  TitleUploadWrap,
  EditorWrap,
  Title,
  UploadButton,
} from './styled';

window.Buffer = window.Buffer || require('buffer').Buffer;

type PostDataType = {
  state?: string;
  detailData?: PostData;
  boardId: number;
  setIsPostData: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PostEditor({
  state,
  detailData,
  boardId,
  setIsPostData,
}: PostDataType) {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isImage, setIsImage] = useState<number>(0);
  const editorRef = useRef<Editor>(null);
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const urlId = currentUrl.split('postId=')[1];

  const isTablet = useMediaQuery({
    query: '(min-width : 768px) and (max-width :1024px)',
  });
  const isPc = useMediaQuery({
    query: '(min-width : 1025px)',
  });

  const editorHeight = () => {
    let height = 78;

    if (state) {
      height = 83.2;
      if (isTablet) height = 63.2;
      if (isPc) height = 71.2;
      return height;
    }

    if (isTablet) height = 62;
    if (isPc) height = 70;
    return height;
  };

  useEffect(() => {
    if (detailData) {
      editorRef.current?.getInstance().setMarkdown(detailData.content);
      setTitle(detailData.title);
      setContent(detailData.content);
    }
  }, []);

  useEffect(() => {
    const editorContentNode = document.getElementsByClassName(
      'toastui-editor-contents',
    )[0];
    let contentChildNodes = editorContentNode.childNodes[0]?.childNodes;
    let arr: string[] = [];
    contentChildNodes?.forEach((el) => {
      arr.push(el.nodeName);
    });
    if (arr.includes('IMG')) {
      setIsImage(1);
    } else {
      setIsImage(0);
    }
    if (content) {
      setIsPostData(true);
    }
  });

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().removeHook('addImageBlobHook');

      editorRef.current
        .getInstance()
        .addHook('addImageBlobHook', (blob, callback) => {
          const s3config = {
            bucketName: process.env.REACT_APP_BUCKET_NAME as string,
            region: process.env.REACT_APP_REGION as string,
            accessKeyId: process.env.REACT_APP_ACCESS_ID as string,
            secretAccessKey: process.env.REACT_APP_ACCESS_KEY as string,
          };
          const ReactS3Client = new S3(s3config);
          ReactS3Client.uploadFile(blob, uuidv4())
            .then((data) => callback(data.location, 'imageURL'))
            .catch(() => (window.location.href = '/error'));
        });
    }
  }, []);

  const uploadHandler = () => {
    if (window.location.pathname === '/writing') {
      instance
        .post(`/post?boardId=${boardId}`, {
          title: title,
          content: content,
          isImage: isImage,
        })
        .then((res) =>
          navigate(`/detail?boardId=${boardId}&postId=${res.data.id}`, {
            replace: true,
          }),
        )
        .catch((err) => console.log(err));
    } else {
      instance
        .put(`/post?boardId=${boardId}&postId=${detailData?.id}`, {
          title: title,
          content: content,
          isImage: isImage,
        })
        .then(
          () =>
            (window.location.href = `/detail?boardId=${boardId}&postId=${urlId}`),
        )
        .catch((err) => console.log(err));
    }
  };

  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const contentHandler = () => {
    setContent(editorRef.current?.getInstance().getMarkdown() || '');
  };
  return (
    <>
      <EditorContainer>
        <TitleUploadWrap>
          <Title>
            <input
              onChange={titleHandler}
              type="text"
              placeholder="제목을 입력해 주세요."
              value={title}
              maxLength={24}
            />
          </Title>
          <UploadButton>
            <button onClick={uploadHandler}>{state ? '수정' : '등록'}</button>
          </UploadButton>
        </TitleUploadWrap>
        <EditorWrap>
          <Editor
            initialValue={content}
            previewStyle="tab"
            height={`${editorHeight()}vh`}
            initialEditType="markdown"
            useCommandShortcut={true}
            onChange={contentHandler}
            ref={editorRef}
          />
        </EditorWrap>
      </EditorContainer>
    </>
  );
}
