import styled from "styled-components";
export const BodyCompositionInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 433px;
  height: 160px;
  gap: 8px;
  .inputName {
    color: #000;
    font-size: 20px;
  }
`;

export const BodyCompositionInputContentContainer = styled.div`
  display: flex;
  height: 60px;
  padding: 14px;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  border-radius: 10px;
  background: #f5f6f7;

  .bodypart {
    color: #555;
    font-size: 14px;
    font-weight: 600;
  }
  .inputContent {
    &::-webkit-input-placeholder {
      color: #9a9798;
    }
    color: #9a9798;
    font-size: 18px;
  }
`;
