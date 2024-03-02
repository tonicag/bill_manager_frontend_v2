import { API } from "../API";
import { LogInRequest } from "./interfaces/logInRequest";

export async function logIn(request: LogInRequest) {
  return API.post("/api/auth/login", request).then(
    (result) => result?.data?.result
  );
}
