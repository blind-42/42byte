import styled from 'styled-components';

export const ListWrap = styled.div`
	border-bottom: solid 2px black;

	@media screen and (min-width: 768px) {
		display: flex;
		align-items: center;
	}
`;

export const ListLeft = styled.div`
	display: flex;
	margin: 1.5vh;
	font-size: larger;
	font-weight: bolder;
	.listComment {
		padding-left:1vw;
		color: gray;
	}
	@media screen and (min-width: 768px) {
		flex: 6;
		text-align: left;
		font-size: medium;
	}
`;

export const ListRight = styled.div`
	display: flex;
	padding: 1vh 2vh 1vh 2vh;
	color: gray;
	.listView {
		flex: 1.5;
		font-weight: bolder;
		text-align: left;
	}
	.listThumsup {
		flex: 1.5;
		font-weight: bolder;
		text-align: left;
	}
	.listWriter {
		flex: 2;
		visibility : hidden;
	}
	.listCreatedat {
		flex: 5;
		text-align: right;
	}
	@media screen and (min-width: 768px) {
		flex: 4;
		display: flex;
		margin: 1vh 0vh 1vh 0vh;
		padding: 1vh;
		color: gray;
		align-items: center;
		.listView {
			flex: 2;
			text-align: center;
		}
		.listThumsup {
			flex: 2;
			text-align: center;
		}
		.listWriter {
			flex: 3;
			visibility : visible;
			text-align: center;
		}
		.listCreatedat {
			flex: 3;
			text-align: center;
			font-size: small;
		}
	}
`;
