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

	// const submitKeyboardHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
	// 	if (e.key === 'Enter') {
	// 		submitCmtHandler(comment)
	// 		setComment('')
	// 	}
	// }

	const submitValidHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		submitCmtHandler(comment)
		setComment('')
	}

	return (
		<>
		<CommentInputWrap onSubmit={submitValidHandler} noValidate >
			{placeholder
				? <textarea placeholder={placeholder} onChange={newCmtInputHandler} value={comment} maxLength={300} />
				: <textarea defaultValue={defaultContent} onChange={newCmtInputHandler} maxLength={300} />
			}
				<div>
					<span>{comment.length} / 300</span>
					<input type='submit' value='등록' />
				</div>
		</CommentInputWrap>
		</>
	);
}