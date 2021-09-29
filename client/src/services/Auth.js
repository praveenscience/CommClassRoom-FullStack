import Axios from "axios";

export const LoginUser = (Username, Password) =>
  Axios.post("/api/auth/login", { Username, Password });

export const RegisterUser = (Username, Password, Name, Email, Role) =>
  Axios.post("/api/auth/register", { Username, Password, Name, Email, Role });

export const LogoutUser = () => Axios.post("/api/auth/logout");

export const VerifyUser = (Username, Code) =>
  Axios.get(`/api/auth/verify/${Username}?Code=${Code}`);
