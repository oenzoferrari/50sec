import {
  useState,
  createContext,
  ReactNode,
  useEffect,
  useContext,
} from "react";

import { decode } from "jsonwebtoken";

import { call as callApi, AuthPayload } from "../api/50sec";

import { isTokenExpired } from "../util/jwt";
import { checkCookies, cleanCookie } from "../util/cookies";

interface UserState {
  uid: string;
  secret: string;
  authenticated: boolean;
  token: string;
}

const initialState: UserState = {
  uid: undefined,
  secret: undefined,
  authenticated: false,
  token: undefined,
};

const UserContext = createContext<UserState>(initialState);

function Provider({ children }: { children: ReactNode }) {
  const [userState, setUserState] = useState<UserState>(initialState);
  const [jwt, setJwt] = useState<string>("");

  useEffect(() => {
    handleTokenRefresh();
  }, [jwt]);

  async function handleTokenRefresh() {
    const payload = decode(jwt) as AuthPayload;

    const result = await callApi("get", "/user/verify", null);

    if (
      !payload ||
      isTokenExpired(payload.exp) ||
      result == "error" ||
      !result.data.auth
    ) {
      setUserState({
        authenticated: false,
        uid: undefined,
        secret: undefined,
        token: jwt,
      });

      cleanCookie();

      return;
    }

    const { uid, userKey } = payload;

    setUserState({
      uid,
      secret: userKey,
      authenticated: true,
      token: jwt,
    });
  }

  function cookieListener() {
    const token = checkCookies();

    setJwt(token);
  }

  useEffect(() => {
    const interval = setInterval(cookieListener, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}

export function useAuth() {
  const userState = useContext(UserContext);

  return userState;
}

export default Provider;
