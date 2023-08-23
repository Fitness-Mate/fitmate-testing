import React, { useState, useEffect } from "react";
import * as S from "./StyledAdmin";
import { loginAdminPostAPI, supplementAPI } from "../../apis/API";
import { AddModal } from "../../components/Modal/AddModal";

// 로그인 세션 획득
const SignIn = async () => {
  const submission = {
    loginId: "administrator",
    password: "administrator",
  };

  let response = await loginAdminPostAPI.post("", submission);
};

const Admin = () => {
  const [addmodal, setAddModal] = useState(false); // 추가 모달
  const [supplementBatch, setSupplementBatch] = useState([]); // 서버에 저장되어있는 supplement 객체
  const [supplementId, setSupplementId] = useState(""); // 선택된 보충제 id
  const [currentPage, setCurrentPage] = useState(1); // 페이지 이동

  const TabMenu = ["Supplement", "Workout", "BodyPart", "Machine"];
  const CategoryList = [
    "englishName",
    "koreanName",
    "flavor",
    "price",
    "servings",
    "조회",
    "수정",
    "삭제",
  ];

  // CRUD 될때마다 데이터 업데이트
  const loadSupplementBatch = async () => {
    // 전체조회(데이터 10개 가져옴)
    const supplementResponse = await supplementAPI.get(`/list/${currentPage}`);
    const fitData = supplementResponse.data.map((obj) => {
      // 받아온 데이터에 보충제 타입 추가
      return {
        ...obj,
      };
    });
    // 데이터 갱신
    setSupplementBatch(fitData);
  };

  // 갱신
  useEffect(() => {
    loadSupplementBatch();
  }, [addmodal]);

  // 처음
  useEffect(() => {
    SignIn();
    loadSupplementBatch();
  }, []);

  return (
    <S.Wrapper addmodal={addmodal} className={addmodal ? "blur" : ""}>
      {addmodal && (
        <AddModal
          onClose={() => setAddModal(false)}
          setAddModal={setAddModal}
        />
      )}
      <S.NavBar>
        {TabMenu.map((tab) => {
          return <S.TabMenu>{tab}</S.TabMenu>;
        })}
      </S.NavBar>

      <S.Table>
        <S.CategoryList>
          {CategoryList.map((category) => {
            return <S.CategoryItem>{category}</S.CategoryItem>;
          })}
        </S.CategoryList>
        <S.DataList>
          {supplementBatch.map((supplement) => {
            return (
              <S.DataItem>
                {CategoryList.map((view, index) => {
                  if (index < 5) {
                    return (
                      <S.DataItemInfo>
                        {supplement[view] ?? "---"}
                      </S.DataItemInfo>
                    );
                  } else {
                    return <S.ButtonItemInfo>{view}</S.ButtonItemInfo>;
                  }
                })}
              </S.DataItem>
            );
          })}
        </S.DataList>
        <S.NavControls>
          <S.Button>Prev</S.Button>
          <S.Button>Next</S.Button>
          <S.Button
            onClick={() => {
              setAddModal(!addmodal);
            }}
          >
            추가
          </S.Button>
        </S.NavControls>
      </S.Table>
    </S.Wrapper>
  );
};

export default Admin;
