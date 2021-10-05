import Axios from "axios";

export const GetUser = Username => Axios.get("/api/users/" + Username);
