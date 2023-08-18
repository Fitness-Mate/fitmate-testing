import { atom } from "recoil";
// 회원가입 input 정보 / 유효성검사 / 중복체크

export const EmailState = atom({
  key: "EmailState",
  default: false,
});

// 유효성 검사
export const validationState = atom({
  key: "validationState",
  default: {
    // [value, 유효성검사, 빨/파 테두리 구분]
    userName: ["", false, false],
    loginEmail: ["", false, true],
    password: ["", false, false],
    sex: ["", false, false],
    birthDate: ["", false, false],
    height: ["", false, false],
    weight: ["", false, false],
    password2: ["", false, false],
    upperBodyFat: ["", false, false],
    lowerBodyFat: ["", false, false],
    upperMuscleMass: ["", false, false],
    lowerMuscleMass: ["", false, false],
  },
});

// 추천 카테고리
export const recommendcategory = atom({
  key: "recommendcategory",
  default: {
    보조제: [false, "protein"],
    운동: [false, "fitness"],
  },
});

export const bodyPartState = atom({
  key: "bodyPartState",
  default: {
    bodyPartKoreanName: [],
  },
});

export const refreshTokenState = atom({
  key: "refreshTokenState",
  default: "",
});
