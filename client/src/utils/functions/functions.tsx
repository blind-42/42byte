import { CommentData } from "./type";

export const stringLimit = (param: string, length: number) => {
	let temp = param;
	if (temp.length > length) {
		temp = temp.slice(0,length) + '...';
	}
	return temp;
}

export const timeForToday = (value: string) => {
	const timeValue = new Date(value);
	const today = new Date();
	const year = `${today.getFullYear()}`;
	const month = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : `${today.getMonth() + 1}`;
	const date = `${today.getDate()}`;
	const fullday = year + '-' + month + '-' + date;

	const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
	if (betweenTime < 1) return '방금전';
	if (betweenTime < 60) {
			return `${betweenTime}분전`;
	}

	if (fullday.slice(0, 10) === value.slice(0,10))
		return value.slice(11, 16);

	return value.slice(2,10);

	// const betweenTimeHour = Math.floor(betweenTime / 60);
	// if (betweenTimeHour < 24) {
	// 		return `${betweenTimeHour}시간전`;
	// }

	// const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
	// if (betweenTimeDay < 365) {
	// 		return `${betweenTimeDay} 일전`;
	// }

	// return `${Math.floor(betweenTimeDay / 365)} 년전`;
}

export const isDelOption = (value: number) => {
	if (value === 1) return '작성자';
	if (value === 2) return '매니저';
	else return '관리자';
}

export const whoIsWriter = (isAuthor: boolean, commentsUserList: number[], authorId: number) => {
	if (isAuthor)
			return ('작성자');
	else
		return (`카뎃${commentsUserList.indexOf(authorId) + 1}`);
}

export const makeCommentUserList = (comments: CommentData[]) => {
	let result: number[] = [];

	for (let cmt of comments) {
		if (!cmt.isAuthor) 
			result.push(cmt.authorId);
		if (cmt.recomments !== null ) {
			for (let recmt of cmt.recomments) {
				if (!recmt.isAuthor) 
					result.push(recmt.authorId);
			}
		}
	}
	return Array.from(new Set(result));
}