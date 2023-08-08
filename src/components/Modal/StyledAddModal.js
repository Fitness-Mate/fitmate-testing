import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 400px;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  z-index: 2;
  img {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 12px;
    right: 12px;
    cursor: pointer;
  }
`;

export const FormList = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  span {
    line-height: 25px;
    font-size: 20px;
    font-weight: 800;
  }
  .FormName {
    font-size: 18px;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 10px;
  background: #e78111;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`;
