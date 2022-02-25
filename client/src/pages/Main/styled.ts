import styled from 'styled-components';

// export const AppContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	height: 100vh;
// 	background: #6BB8F0;
// `;

export const SettingsBtn = styled.div`
	position: absolute;
	bottom: 7vh;
	right: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	div:nth-child(1) {
		text-align: center;
		font-size: 4.8rem;
		color: #FFEBA3;
	}
	div:last-child {
		font-weight: 500;
		font-size: 1.3rem;
		color: #fff;
		background: #001FE7;
		margin: 0.3rem 0;
		padding: 0 3px;
	}
	${({theme}) => theme.media.tablet`
		div:nth-child(1) {
			font-size: 4.2rem;
		}
		div:last-child {
			font-size: 1.1rem;
		}
	`}
	${({theme}) => theme.media.desktop`
	div:nth-child(1) {
		font-size: 3.5rem;
	}
	div:last-child {
		font-size: 0.9rem;
	}
`}
`;