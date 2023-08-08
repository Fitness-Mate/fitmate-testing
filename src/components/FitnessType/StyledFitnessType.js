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
    background: #d0ebff;
    display: flex;
    padding: 6px 13px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #0b98ff;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: -0.24px;
  }

  .fitnessInfo {
    width: 333px;
    height: 145px;
    padding: 24px 10px 20px 16px;
    border-radius: 0px 0px 16px 16px;
    background: #f5f6f7;
    display: flex;
    flex-direction: column;
    gap: 7px;
    .fitnessTitle {
      color: #2f3233;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: -0.48px;
    }
    .fitnessExplain {
      color: #555;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: -0.32px;
    }
  }
`;
