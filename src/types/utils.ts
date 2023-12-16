export type ApiResponseType<T> = {
    status_code: number;
    data: T;
    status: string;
  };