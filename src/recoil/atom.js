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

// 운동 부위 리스트
export const bodyPartList = atom({
  key: "bodyPartList",
  default: {
    어깨: false,
    가슴: false,
    등: false,
    삼두: false,
    이두: false,
    엉덩이: false,
    허벅지앞: false,
    허벅지뒤: false,
    종아리: false,
    복부: false,
  },
});
// 운동 부위 리스트
export const fitnessequipment = atom({
  key: "fitnessequipment",
  default: {
    덤벨: false,
    바벨: false,
    스미스머신: false,
    듀얼풀리케이블머신: false,
    케틀: false,
    렉: false,
    벤치: false,
    덤벨프레스: false,
    어시스트: false,
    레그익스텐션: false,
  },
});

export const recommendcategory = atom({
  key: "recommendcategory",
  default: {
    보조제: [false, "protein"],
    운동: [false, "fitness"],
  },
});
