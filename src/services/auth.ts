import AxoisApi from "../api";
import { APIS } from "../api/api";
import { AdminLoginTypes, LoginResponseTypes } from "../types/auth";

export const adminLogin = (data: AdminLoginTypes) => {
  return new Promise<LoginResponseTypes>((resolve, reject) => {
    AxoisApi.post(APIS.AUTH.LOGIN, data)
      .then((res: {data: LoginResponseTypes}) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
