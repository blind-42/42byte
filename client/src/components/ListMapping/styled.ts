import styled from 'styled-components';

export const ListWrap = styled.div`
	display: flex;
	margin-top: 1vh;
	padding-bottom: 1vh;
	border-bottom: solid 2px black;
	text-align: center;
	div {
		padding: 1vh;
	}
	.listTitle {
		flex: 6;
		margin-left:1vw;
		text-align: left;
		font-weight: bolder;
		.listComment {
			color: gray;
		}
	}
	.listView {
		flex: 0.5;
		color: gray;
		font-weight: bolder;
	}
	.listThumsup {
		flex: 0.5;
		color: gray;
		font-weight: bolder;
	}
	.listWriter {
		flex: 1.5;
		color: gray;
	}
	.listCreatedat {
		flex: 1.5;
		color: gray;
		font-size: small;
	}
`;