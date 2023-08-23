import axios from "axios";

/**
 * Manage_Login API
 */

// 관리자 로그인
export const loginAdminPostAPI = axios.create({
  method: "post",
  baseURL: "/api/admin/login",
  withCredentials: true,
});

/**
 * Manage_Supplement API
 */
export const supplementCategoryAPI = axios.create({
  baseURL: "/api/admin/supplement",
  withCredentials: true,
});

export const supplementAPI = axios.create({
  baseURL: "/api/admin/supplements",
  withCredentials: true,
});

export const supplementImageAPI = axios.create({
  baseURL: "/api/admin/supplements",
  withCredentials: true,
  responseType: "arraybuffer",
});

export const supplementPostAPI = axios.create({
  method: "post",
  baseURL: "/api/admin/supplements",
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

export const supplementPutAPI = axios.create({
  method: "put",
  baseURL: "/api/admin/supplements",
  withCredentials: true,
});

/**
 * Manage_Workout API
 */

export const workoutAPI = axios.create({
  baseURL: "/api/admin/workouts",
  withCredentials: true,
});

export const workoutPostAPI = axios.create({
  method: "post",
  baseURL: "/api/admin/workouts",
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

export const workoutPutAPI = axios.create({
  method: "put",
  baseURL: "/api/admin/workouts",
  withCredentials: true,
});

export const workoutImageAPI = axios.create({
  baseURL: "/api/admin/workouts",
  withCredentials: true,
  responseType: "arraybuffer",
});

/**
 * Manage_Machine API
 */
export const machineAPI = axios.create({
  baseURL: "/api/admin/machines",
  withCredentials: true,
});

export const machinePostAPI = axios.create({
  method: "post",
  baseURL: "/api/admin/machines",
  withCredentials: true,
});

export const machinePutAPI = axios.create({
  method: "put",
  baseURL: "/api/admin/machines",
  withCredentials: true,
});

/**
 * Manage_BodyPart API
 */
export const bodyPartAPI = axios.create({
  baseURL: "/api/admin/bodyParts",
  withCredentials: true,
});

export const bodyPartPostAPI = axios.create({
  method: "post",
  baseURL: "/api/admin/bodyParts",
  withCredentials: true,
});

export const bodyPartPutAPI = axios.create({
  method: "put",
  baseURL: "/api/admin/bodyParts",
  withCredentials: true,
});

// User

/**LoginInfo */

// 로그인 요청
export const loginPostAPI = axios.create({
  method: "post",
  baseURL: "/api/auth/login",
  withCredentials: true,
});

// 로그아웃(refresh 토큰)
export const logoutPutAPI = axios.create({
  method: "put",
  baseURL: "/api/auth/logout",
  withCredentials: true,
});

/**
 * User API
 */

// accessToken 재발급(refersh 토큰 필요)
export const getAccessAPI = axios.create({
  baseURL: "/api/auth/refresh",
  withCredentials: true,
});

// 사용자 정보 조회(토큰)
export const userAPI = axios.create({
  baseURL: "/api/user/private",
  withCredentials: true,
});

// 사용자 가입
export const userPostAPI = axios.create({
  method: "post",
  baseURL: "/api/user/auth",
  withCredentials: true,
});

// 사용자 정보 수정(토큰)
export const userPutAPI = axios.create({
  method: "put",
  baseURL: "/api/user",
  withCredentials: true,
});

// 회원 탈퇴(토큰)
export const userDeleteAPI = axios.create({
  method: "post",
  baseURL: "/api/user/delete",
  withCredentials: true,
});

// 사용자 비밀번호 수정(토큰)
export const userPasswordAPI = axios.create({
  method: "post",
  baseURL: "/api/user/password",
  withCredentials: true,
});

// 회원 가입 시 email 중복 검사
export const userIdVerifyAPI = axios.create({
  method: "post",
  baseURL: "/api/user/auth/verify/email",
  withCredentials: true,
});

/**
 * User API
 */

// bodyData 단건 조회 / bodyData Batch 조회 / 가장 최근 데이터 조회(chat gpt 추천받을 때 필요) (토큰)
export const bodyDataAPI = axios.create({
  baseURL: "/api/bodyData",
  withCredentials: true,
});

// bodyDate 등록(토큰)
export const bodyDataPostAPI = axios.create({
  method: "post",
  baseURL: "/api/bodyData",
  withCredentials: true,
});

// bodyData 단건 삭제
export const bodyDataDeleteAPI = axios.create({
  method: "post",
  baseURL: "/api/bodyData/delete",
  withCredentials: true,
});

/**
 * Non-adminAPIs
 */

// 운동 부위 전체 조회
export const nonAdminBodyPartAPI = axios.create({
  method: "get",
  baseURL: "/api/bodyParts",
  withCredentials: true,
});

// gpt질문 중 bodypart선택 시 운동기구 정보 동적 제공을 위한 조회(토큰)
export const nonAdminMachineAPI = axios.create({
  method: "post",
  baseURL: "/api/machines",
  withCredentials: true,
});

/**
 * RecommendationAPIs
 */

// 운동 목적 전체 리스트 요청
export const recommendAPI = axios.create({
  baseURL: "/api/recommendation",
  withCredentials: true,
});

// 보조제 추천 요청 or 보조제 추천 요청
export const recommendPostAPI = axios.create({
  method: "post",
  baseURL: "/api/recommendation",
  withCredentials: true,
});

// 운동 추천 history batch 요청 or 운동 추천 history 단건 요청
export const recommendWorkoutHistoryAPI = axios.create({
  baseURL: "/api/recommendation/workout/history",
  withCredentials: true,
});

// (토큰 필요)
// 보조제 추천 history 단건 요청 or 보조제 추천 history batch 요청
export const recommendSupplementHistoryAPI = axios.create({
  baseURL: "/api/recommendation/supplement/history",
  withCredentials: true,
});

// (토큰 필요)
// 보조제 추천 요청 or 운동 목적 전체 리스트 요청
export const userSupplementAPI = axios.create({
  baseURL: "/api/recommendation/supplement",
  withCredentials: true,
});

/**ServiceInquiry */

// 추천 운동 batch 검색
export const userWorkoutBatchAPI = axios.create({
  method: "post",
  baseURL: "/api/workouts/search/list",
  withCredentials: true,
});

// 추천 운동 단일 조회
export const userWorkoutAPI = axios.create({
  baseURL: "/api/workouts",
  withCredentials: true,
});

// 운동 부위 전체조회
export const userBodyPartAPI = axios.create({
  baseURL: "/api/bodyParts/all",
  withCredentials: true,
});
