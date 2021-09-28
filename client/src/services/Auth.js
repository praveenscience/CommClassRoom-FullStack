import Axios from "axios";

export const LoginUser = (Username, Password) =>
  Axios.post("/api/auth/login", { Username, Password });
