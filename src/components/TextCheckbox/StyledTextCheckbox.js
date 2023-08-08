// < 글만 있는 체크박스 스타일 >

import styled from 'styled-components';

// 만들어진 레이아웃 특정 란에 넣으면
// 거기에 맞게 채워지도록 가로 100%로 설정(디자인에 따라 세로는 설정 X)

export const TextCheckbox = styled.div`
	display: flex;
	width: 100%;
	padding: 10px 14px;
	background: ${({ theme }) => theme.Gray10};
	border-radius: 16px;
	flex-direction: column;
	margin:10px;
	cursor: pointer;
	border: 2px solid ${({ theme }) => theme.Gray10};

	&:hover {
		border: 2px solid ${({ theme }) => theme.Gray30};

		.check-shape {
			fill: ${({ theme }) => theme.Black};
		}

		.choice-article {
			color: ${({ theme }) => theme.Black};
		}
	
	}

	.TextCheckbox-layout {
		display: flex;
		justify-content: space-between;
		align-items: center;
		align-self: stretch;
	}
	
	.choice-article {
		color: ${({ theme }) => theme.Gray70};
		font-size: 22px;
		font-style: normal;
		font-family: Pretendard;
		font-weight: 600;
	}

	.check-background {
		fill: ${({ theme }) => theme.Gray10};
	}

	.check-shape {
		fill: ${({ theme }) => theme.Gray30};
	}

`;
