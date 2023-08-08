import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  &.blur::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 140px;
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
`;

export const TabMenu = styled.button`
  width: 300px;
  height: 38px;
  background: #e78111;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  border: none;
  focus: none;
  outline: none;
  cursor: pointer;
`;

export const Table = styled.div`
  width: 90%;
  background: beige;
  margin: 0 auto;
  margin-top: 100px;
  padding: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
export const CategoryList = styled.div`
  background: #e78111;
  height: 80px;
  align-items: center;
  justify-content: space-around;
  display: flex;
`;

export const CategoryItem = styled.div`
  font-size: 18px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
export const DataList = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  > :last-child {
    border-bottom: 1px solid black;
  }
`;
export const DataItem = styled.div`
  display: flex;
  border-top: 1px solid black;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
`;

export const DataItemInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  padding: 15px;
`;

export const ButtonItemInfo = styled.button`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  padding: 15px;
  border-radius: 10px;
  background: #e78111;
  cursor: pointer;
  border: none;
  outline: none;
`;

export const NavControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
`;

export const Button = styled.button`
  background: #e78111;
  color: #fff;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
`;
