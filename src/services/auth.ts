import AxoisApi from "../api";
import { APIS } from "../api/api";

export const adminLogin = (data: any) => {
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
