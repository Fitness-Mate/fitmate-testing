// < 홈 스타일 >

import styled from 'styled-components';

export const Container = styled.div`
	width: 1440px;
	height: 100vh;
	margin-left: auto;
  margin-right: auto;
`;

export const Home = styled.div`
	width: 1392px;
	margin-left: auto;
  margin-right: auto;
	display: flex;
  flex-direction: column;
	position: relative;
	align-items: center;
	gap: 64px;
	padding-bottom: 300px;
`;

export const HomeContent = styled.div`
	width: 100%;
	height: 530px;
  margin-right: auto;
	display: flex;
  flex-direction: column;
	position: relative;
	align-items: center;
	justify-content: center;
	gap: 64px;
	margin-top: 64px;
`;

export const FirstContent = styled.div`
	width: 544px;
	height: 344px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	.FirstTop {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 22px;
		font-family: "Pretendard";
		color: ${({ theme }) => theme.BrandDark};
		font-size: 23px;
		font-weight: 600;
	}

	.FirstMiddle {
		text-align: center;
		width: 100%;
		height: 126px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 11px;
	}

	.FirstMiddle p {
		text-align: center;
		font-family: "Pretendard";
		color: ${({ theme }) => theme.Black};
		font-size: 53px;
		font-weight: 700;
		letter-spacing: -1.06px;
	}

	.FirstBottom {
		margin-top: 18px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: "Pretendard";
		color: ${({ theme }) => theme.Gray80};
		font-size: 23px;
		font-weight: 600;
	}
`;

export const ShortcutButton = styled.button`
	margin-top: 47px;
	display: flex;
	padding: 22px 10px;
	justify-content: center;
	align-items: center;
	gap: 3px;
	border-radius: 12px;
	font-family: Pretendard;
	font-size: 22px;
	font-weight: 600;
	cursor: pointer;
	width: 209px;
	height: 77px;
	
	background: ${({ theme }) => theme.Brand};
	color: ${({ theme }) => theme.White};

	&:hover {
		opacity: 0.5;
	}
`;

export const SecondContent = styled.div`
	width: 1252px;
	height: 477px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const SecondText = styled.div`
	width: 613px;
	height: 342px;
	display: flex;
	flex-direction: column;
	gap: 16px;

	.SecondTop {
		width: 100%;
		display: flex;
		font-family: "Pretendard";
		color: ${({ theme }) => theme.Black};
		font-size: 56px;
		font-weight: 700;
		gap: 12px;
	}

	.SecondTop p {
		color: ${({ theme }) => theme.Gray70};
		font-size: 56px;
		font-weight: 700;
	}

	.SecondMiddle {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-top: 20px;
		gap: 10px;
	}

	.SecondMiddle p {
		font-family: "Pretendard";
		color: ${({ theme }) => theme.Gray80};
		font-size: 34px;
		font-weight: 600;
		letter-spacing: -0.68px;
	}

	.SecondBottom {
		margin-top: 40px;
		display: flex;
		align-items: center;
	}

	.ClickFrame {
		display: flex;
		align-items: center;
		cursor: pointer;
		&:hover {
			opacity: 0.5;
		}
	}

	.SecondBottom p {
		font-family: "Pretendard";
		color: ${({ theme }) => theme.Brand};
		font-size: 24px;
		font-weight: 600;
	}

	.SecondBottom svg {
		width: 29px; 
		height: 30px; 
		fill: ${({ theme }) => theme.Brand};
	}

	#right {
		display: flex;
		justify-content: flex-end;
	}
`;

export const SecondImg1 = styled.div`
	width: 346px;
	height: 100%;
	display: flex;
	align-items: center;

	.HomeSecondImg {
		height: 468px;
		width: 310px;
	}
`;


export const SecondImg2 = styled.div`
	width: 452px;
	height: 406px;
	display: flex;
	align-items: center;

	.HomeSecondImg {
		height: 360px;
		width: 398px;
	}
`;

export const ThirdContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	gap: 30px;
	flex-direction: column;

	.Thirdtitle {
		color: ${({ theme }) => theme.Black};
		font-family: "Pretendard";
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 28px;
	}
`;

export const ThirdText = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	gap: 12px;
`;

export const ThirdFrame = styled.div`
	width: 456px;
	height: 360px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
	box-shadow: 0px 4px 14px #8b878740;
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

export const FrameTop = styled.div`
	width: 352px;
	display: flex;
	gap: 19px;
	align-items: center;

	.PlofileImg {
		background: ${({ theme }) => theme.BrandLight};
		border-radius: 41.5px;
		height: 83px;
		width: 83px;
	}

	.PlofileContent {
		display: flex;
		flex-direction: column;
		gap: 9px;
	}
		
	.PlofileContent h1 {
		color: ${({ theme }) => theme.Black};
		font-family: "Pretendard";
		font-size: 29px;
		font-weight: 700;
		letter-spacing: -0.58px;
		}

	.PlofileContent div {
		color: ${({ theme }) => theme.Gray80};
		font-family: "Pretendard";
		font-size: 25px;
		font-weight: 500;
		letter-spacing: -0.5px;
		}
`;

export const FrameBottom = styled.div`
	width: 352px;
	color: ${({ theme }) => theme.Gray80};
	font-family: "Pretendard";
	font-size: 23px;
	font-weight: 500;
	letter-spacing: -0.46px;
	line-height: 1.3;
`;