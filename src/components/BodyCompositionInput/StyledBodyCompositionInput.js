import styled from "styled-components";
export const BodyCompositionInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 433px;
  height: 160px;
  gap: 8px;
  padding-top: 30px;
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
  background: ${({ theme }) => theme.Gray10};

  .bodypart {
    color: ${({ theme }) => theme.Gray80};
    font-size: 14px;
    font-weight: 600;
  }
  .inputContent {
    &::-webkit-input-placeholder {
      color: ${({ theme }) => theme.Gray50};
    }
    color: ${({ theme }) => theme.Gray50};
    font-size: 18px;
  }
`;
