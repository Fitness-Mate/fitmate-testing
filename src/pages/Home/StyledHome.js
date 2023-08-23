// < 홈 스타일 >

import styled from "styled-components";
import theme from "./../../styles/theme";

export const HomeContainer = styled.ul`
  width: 100%;
  margin: 0 auto;
  display: flex;

  flex-direction: column;
  align-items: center;
  gap: 64px;
  padding-bottom: 300px;
`;

export const HomeContent = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FirstContent = styled.div`
  padding: 93px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  border-radius: 16px;
  background: #f9fbfe;
  width: 100%;

  .firstTop {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.BrandDark};
    font-size: 23px;
    font-weight: 600;
  }

  .firstMiddle {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 126px;
  }

  .firstMiddle p {
    text-align: center;
    color: ${({ theme }) => theme.Black};
    font-size: 53px;
    font-weight: 700;
    letter-spacing: -1.06px;
  }

  .firstBottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.Gray80};
    font-size: 23px;
    font-weight: 600;
  }

  .shortCutButton {
    margin-top: 27px;
    display: flex;
    padding: 22px 10px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    font-size: 22px;
    font-weight: 600;
    width: 209px;
    height: 77px;

    background: ${({ theme }) => theme.Brand};
    color: ${({ theme }) => theme.White};

    &:hover {
      opacity: 0.5;
    }
  }
`;

export const SecondContent = styled.div`
  width: 100%;
  padding: 88px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SecondText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 12px;

  .secondTop {
    display: flex;
    width: 100%;
    color: ${({ theme }) => theme.Black};
    font-size: 56px;

    font-weight: 700;
    gap: 16px;
    p {
      color: ${({ theme }) => theme.Gray70};
      font-size: 56px;
      font-weight: 700;
    }
  }

  .secondMiddle {
    margin-top: 8px;
    line-height: normal;
    height: 87px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      color: ${({ theme }) => theme.Gray80};
      font-size: 34px;
      font-weight: 600;
      letter-spacing: -0.68px;
    }
  }

  .secondBottom {
    margin-top: 28px;
    p {
      color: ${({ theme }) => theme.Brand};
      font-size: 24px;
      font-weight: 600;
    }
  }

  .clickFrame {
    padding: 0;
    display: flex;
    align-items: center;
    &:hover {
      opacity: 0.5;
    }
    span {
      color: ${({ theme }) => theme.Brand};
      font-size: 24px;
      font-weight: 600;
    }
  }

  #right {
    display: flex;
    justify-content: flex-end;
  }
`;

export const SecondImg1 = styled.div`
  padding: 4px 18px 5px 18px;
  display: flex;
  align-items: center;
`;

export const SecondImg2 = styled.div`
  padding: 15.587px 19px 30.413px 35px;
  display: flex;
  align-items: center;
`;

export const ThirdContent = styled.div`
  display: flex;
  gap: 28px;
  flex-direction: column;
  padding: 50px 20px;
  .thirdTitle {
    color: ${theme.Black};
    font-size: 42px;
    font-weight: 700;
  }
`;

export const ThirdText = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  @media (max-width: 1440px) {
    display: block;
  }
`;

export const ThirdFrame = styled.div`
  padding: 48px 52px;
  border-radius: 20px;
  box-shadow: 0px 4px 14px #8b878740;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 1440px) {
    align-items: center;
    width: 60%;
    margin: 0 auto;
  }
`;

export const FrameTop = styled.div`
  width: 352px;
  display: flex;
  gap: 19px;
  align-items: center;

  .profileImg {
    background: ${theme.BrandLight};
    border-radius: 41.5px;
    height: 83px;
    width: 83px;
  }

  .profileContent {
    display: flex;
    flex-direction: column;
    gap: 9px;
    .profileName {
      color: ${theme.Black};
      font-size: 29px;
      font-weight: 700;
      letter-spacing: -0.58px;
    }
    .profileInfo {
      color: ${theme.Gray80};
      font-size: 25px;
      letter-spacing: -0.5px;
    }
  }
`;

export const FrameBottom = styled.div`
  width: 352px;
  color: ${theme.Gray80};
  font-size: 23px;
  letter-spacing: -0.46px;
  line-height: 1.3;
`;
