import styled from "styled-components";
export const CardContainer = styled.div`
  position: relative;
  .fitnessImg {
    border-radius: 16px 16px 0px 0px;
    width: 333px;
    height: 250px;
  }
  .fitnessPart {
    position: absolute;
    left: 22px;
    top: 20px;
    border-radius: 10px;
    background: ${({ theme }) => theme.BrandLight};
    display: flex;
    padding: 6px 13px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.Brand};
    font-size: 12px;
    font-weight: 700;
    letter-spacing: -0.24px;
  }

  .fitnessInfo {
    width: 333px;
    height: 145px;
    padding: 24px 10px 20px 16px;
    border-radius: 0px 0px 16px 16px;
    background: ${({ theme }) => theme.Gray10};
    display: flex;
    flex-direction: column;
    gap: 7px;
    .fitnessTitle {
      color: ${({ theme }) => theme.Black};
      font-size: 24px;
      font-weight: 700;
      letter-spacing: -0.48px;
    }
    .fitnessExplain {
      color: ${({ theme }) => theme.Gray80};
      font-size: 16px;
      font-weight: 600;
      letter-spacing: -0.32px;
    }
  }
`;
