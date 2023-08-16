import { styled } from "styled-components";
import theme from "../../styles/theme";

export const RecommendContainer = styled.div`
  max-width: 842px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;
  padding: 78px 25px 0 25px;

  .goodImg {
    width: 328px;
    height: 232px;
    display: inline-block;
    margin: 0 auto;
    margin-bottom: 100px;
  }
`;

export const RecommendTitle = styled.span`
  font-size: ${({ ftsize }) => ftsize};
  color: ${({ ftcolor }) => ftcolor};
  font-weight: ${({ ftweight }) => ftweight};
  .hide {
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
`;

export const RecommendTitleHide = styled(RecommendTitle)`
  @media screen and (max-width: 660px) {
    display: none;
  }
`;

export const RecommendTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const RecommendButtonContainer = styled.div`
  margin-top: 186px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const RecommendImgContainer = styled.div`
  display: flex;
  gap: 40px;
  // 이미지 세로 한 줄로
  @media (max-width: 830px) {
    flex-direction: column;
  }
`;

export const RecommendTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const TextCheckboxContainer = styled.div`
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
`;

export const BorderTextCheckboxContainer = styled.div`
  padding-top: 40px;
  border-top: 2px solid ${theme.Gray20};
  display: flex;
  flex-direction: column;
  gap: 22px;
  .allSelectButton {
    color: ${theme.Brand};
    font-size: 22px;
    font-weight: 600;
    display: flex;
    padding: 10px;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const BorderTextCheckboxInnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
`;

export const ButonWrapper = styled.div`
  margin: 0 auto;
`;
