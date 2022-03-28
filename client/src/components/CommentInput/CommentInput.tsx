import { useEffect } from 'react';
import { useState } from 'react';
import { CommentInputWrap } from './styled';

type Props = {
  submitCmtHandler: (comment: string) => void;
  placeholder?: string;
  defaultContent?: string;
};

export default function CommentInput({
  submitCmtHandler,
  placeholder,
  defaultContent,
}: Props) {
  const [comment, setComment] = useState<string>('');

  const newCmtInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  // const submitKeyboardHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
  // 	if (e.key === 'Enter') {
  // 		submitCmtHandler(comment)
  // 		setComment('')
  // 	}
  // }

  useEffect(() => {
    if (defaultContent) setComment(defaultContent);
  }, []);

  const submitValidHandler = () => {
    submitCmtHandler(comment);
    setComment('');
  };

  return (
    <>
      <CommentInputWrap>
        {placeholder ? (
          <textarea
            placeholder={placeholder}
            onChange={newCmtInputHandler}
            value={comment}
            maxLength={300}
          />
        ) : (
          <textarea
            defaultValue={defaultContent}
            onChange={newCmtInputHandler}
            maxLength={300}
          />
        )}
        <div>
          <span>{comment.length} / 300</span>
          <input type="button" onClick={submitValidHandler} value="등록" />
        </div>
      </CommentInputWrap>
    </>
  );
}
