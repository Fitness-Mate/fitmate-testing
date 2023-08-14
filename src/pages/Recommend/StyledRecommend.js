import { styled } from "styled-components";

export const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 92px;
  padding: 78px 25px 0 25px;

  .goodImg {
    width: 328px;
    height: 232px;
    margin-bottom: 100px;
  }
`;

export const RecommendTitle = styled.span`
  font-size: ${({ ftsize }) => ftsize};
  color: ${({ ftcolor }) => ftcolor};
  font-weight: ${({ ftweight }) => ftweight};
`;

export const RecommendButtonContainer = styled.div`
  margin-top: 186px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const RecommendImgContainer = styled.div``;

export const TextCheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
`;
