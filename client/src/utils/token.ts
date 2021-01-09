import jwtDecode from "jwt-decode"
import { TOKEN } from "./constants";

export function setToken(token: string) {
  localStorage.setItem(TOKEN, token);
}

export function getToken() {
  return localStorage.getItem(TOKEN);
}

export function decodeToken(token: string) {
  return jwtDecode(token);
}
