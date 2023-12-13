import AxoisApi from "../api";
import { APIS } from "../api/api";
import { AdminLoginTypes } from "../types/auth";

export const adminLogin = (data: AdminLoginTypes) => {
  return new Promise((resolve, reject) => {
    AxoisApi.post(APIS.AUTH.LOGIN, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
