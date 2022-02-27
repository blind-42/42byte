import { useState } from 'react';
import { CommentInputWrap } from './styled';

type Props = {
	submitCmtHandler: (comment: string) => void
	placeholder?: string
	defaultContent?: string
};

export default function CommentInput({submitCmtHandler, placeholder, defaultContent}: Props) {
	const [comment, setComment] = useState<string>('');

	const newCmtInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setComment(e.target.value);
	}

	const submitHandler = () => {
		submitCmtHandler(comment)
		setComment('')
	}

	return (
		<>
		<CommentInputWrap>
				<textarea placeholder={placeholder} 
									defaultValue={defaultContent} 
									onChange={newCmtInputHandler} 
									value={comment}
									maxLength={300} />
				<div>
					<span>{comment.length} / 300</span>
					<input type='button' value='등록' onClick={submitHandler}/>
				</div>
		</CommentInputWrap>
		</>
	);
}