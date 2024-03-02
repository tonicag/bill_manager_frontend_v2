export type ResponseDTO<T> =
  | {
      isSuccess: "true";
      result: T;
    }
  | {
      isSuccess: "false";
      message: string;
    };
