import axiosInstance from "./axiosInstance";

export const registerUser = (data) => {
  return axiosInstance.post("/user/registration", data);
};

export const loginUser = (data) => {
  return axiosInstance.post("/user/login", data);
};
