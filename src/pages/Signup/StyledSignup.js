import styled from "styled-components";

export const SignupContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  .recommendText {
    color: #555;
    font-size: 22px;
    font-weight: 500;
  }
  .buttonContainer {
    display: flex;
    flex-direction: column;
  }
  .congratuImg {
    width: 249px;
    height: 274px;
    margin-top: 60px;
  }

  .profileForm {
    display: flex;
    gap: 12px;
    flex-direction: column;
  }
`;

export const SignupTitle = styled.span`
  text-align: ${({ flex }) => (flex ? "center" : "")};
  display: ${({ flex }) => (flex ? "flex" : "")};
  flex-direction: ${({ flex }) => (flex ? "column" : "")};
  align-items: center;
  width: 100%;
  margin-bottom: 36px;

  color: #707070;
  font-size: 28px;
  font-weight: 700;
  .warningNoWrite {
    display: inline-block;
    color: #555;
    font-size: 22px;
    font-weight: 500;
    margin-top: 12px;
  }
  .congratu {
    display: inline-block;
    color: #555;
    font-size: 24px;
    font-weight: 500;
    margin-top: 18px;
  }
`;

export const TitleEmphasis = styled.span`
  color: #2f3233;
  font-size: 28px;
  font-weight: 700;
`;

export const BodyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  .sexSelect {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 34px;
    .bodyInfoWarning {
      color: #eb444c;
      font-size: 16px;
    }
  }

  .sexList {
    display: flex;
    gap: 5px;
  }
`;

export const ProfileInputcontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SexItem = styled.button`
  border-radius: 16px;
  background: ${({ sex }) => (sex ? "#F5F6F7" : "#FFF")};
  display: flex;
  width: 126px;
  height: 126px;
  padding: 18px 32px 19px 31px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  .sexImg {
    width: 60px;
    height: 60px;
  }
`;

export const SexName = styled.span`
  color: ${({ sex }) => (sex ? "#2f3233" : "#9A9798")};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
`;

export const SignupTitleContainer = styled.div`
  display: flex;
  padding: 0px 76px 39px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const SignupTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  .directButtonContainer {
    display: flex;
    justify-content: flex-end;
    .directbutton {
      /* 자식 크기에 width 맞추기 */
      padding: 10px;
      justify-content: center;
      display: flex;
      align-items: center;
      gap: 10px;
      color: #0b98ff;
      font-size: 20px;
      font-weight: 600;
      .rightArrow {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const BodyCompositionInputList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 153px;
`;
