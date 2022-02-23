export const shortening = (param: string, length: number) => {
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