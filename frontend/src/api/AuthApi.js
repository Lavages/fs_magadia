import axios from "axios";
import { BASE_URL } from "./api_url";

export const handleLogin = async (username, password, setMessage) => {
  try {
    const response = await axios.post(`${BASE_URL}api/token/`, {
      username,
      password,
    });
    setMessage("Login Succesfully");
    localStorage.setItem("access_token", response.data.access);
    localStorage.setItem("refresh_token", response.data.refresh);
  } catch (err) {
    console.log(err);
    setMessage("Invalid Username or Password");
  }
};
