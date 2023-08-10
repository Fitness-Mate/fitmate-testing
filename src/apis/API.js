import axios from "axios";

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

/**LoginInfo */
export const loginPostAPI = axios.create({
  method: "post",
  baseURL: "/api/login/",
  withCredentials: true,
});

export const logoutPutAPI = axios.create({
  method: "put",
  baseURL: "/api/logout",
  withCredentials: true,
});

export const loginAdminPostAPI = axios.create({
  method: "post",
  baseURL: "/api/admin/login",
  withCredentials: true,
});

/**
 * User API
 */
export const userAPI = axios.create({
  baseURL: "/api/user",
  withCredentials: true,
});

export const userPostAPI = axios.create({
  method: "post",
  baseURL: "/api/user",
  withCredentials: true,
});

export const userPutAPI = axios.create({
  method: "put",
  baseURL: "/api/user",
  withCredentials: true,
});

export const userDeleteAPI = axios.create({
  method: "post",
  baseURL: "/api/user/delete",
  withCredentials: true,
});

export const userPasswordAPI = axios.create({
  method: "post",
  baseURL: "/api/user/password",
  withCredentials: true,
});

export const userIdVerifyAPI = axios.create({
  method: "post",
  baseURL: "/user/verify/email",
  withCredentials: true,
});

/**
 * User API
 */
export const bodyDataAPI = axios.create({
  baseURL: "/api/bodyData",
  withCredentials: true,
});

export const bodyDataPostAPI = axios.create({
  method: "post",
  baseURL: "/api/bodyData",
  withCredentials: true,
});

export const bodyDataDeleteAPI = axios.create({
  method: "post",
  baseURL: "/api/bodyData/delete",
  withCredentials: true,
});

/**
 * Non-adminAPIs
 */
export const nonAdminBodyPartAPI = axios.create({
  method: "get",
  baseURL: "/api/bodyParts",
  withCredentials: true,
});

export const nonAdminMachineAPI = axios.create({
  method: "post",
  baseURL: "/api/machines",
  withCredentials: true,
});

/**
 * RecommendationAPIs
 */
export const recommendAPI = axios.create({
  baseURL: "/api/recommendation",
  withCredentials: true,
});

export const recommendPostAPI = axios.create({
  method: "post",
  baseURL: "/api/recommendation",
  withCredentials: true,
});

export const recommendWorkoutHistoryAPI = axios.create({
  baseURL: "/api/recommendation/workout/history",
  withCredentials: true,
});

export const recommendSupplementHistoryAPI = axios.create({
  baseURL: "/api/recommendation/supplement/history",
  withCredentials: true,
});

export const userSupplementAPI = axios.create({
  baseURL: "/api/supplements",
  withCredentials: true,
});

export const userSupplementImageAPI = axios.create({
  baseURL: "/api/supplements",
  withCredentials: true,
  responseType: "arraybuffer",
});

/**ServiceInquiry */
export const userWorkoutImageAPI = axios.create({
  baseURL: "/api/workouts/image",
  withCredentials: true,
  responseType: "arraybuffer",
});

export const userWorkoutBatchAPI = axios.create({
  method: "post",
  baseURL: "/api/workouts/search/list",
  withCredentials: true,
});

export const userWorkoutAPI = axios.create({
  baseURL: "/api/workouts",
  withCredentials: true,
});

export const userBodyPartAPI = axios.create({
  baseURL: "/api/bodyParts/all",
  withCredentials: true,
});
