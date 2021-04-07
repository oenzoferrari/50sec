import { getCookie, setCookie } from "react-use-cookie";

export function checkCookies() {
  const token = getCookie("token");

  return token;
}

export function cleanCookie() {
  setCookie("token", "");
}
