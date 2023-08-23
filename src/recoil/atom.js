import { atom } from "recoil";

export const EmailState = atom({
  key: "EmailState",
  default: false,
});

// 유효성 검사
export const validationState = atom({
  key: "validationState",
  default: {
    // [value, 유효성검사, 빨/파 테두리 구분]
    userName: ["", false],
    loginEmail: ["", false],
    password: ["", false],
    sex: ["", false],
    birthDate: ["", false],
    height: ["", false, false],
    weight: ["", false],
    password2: ["", false],
    upperBodyFat: ["", false],
    lowerBodyFat: ["", false],
    upperMuscleMass: ["", false],
    lowerMuscleMass: ["", false],
  },
});

export const bodyPartState = atom({
  key: "bodyPartState",
  default: {
    bodyPartKoreanName: [],
  },
});
