import {
  useState,
  createContext,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import { decode } from "jsonwebtoken";

import { AuthPayload } from "../api/50sec";

import { isTokenExpired } from "../util/jwt";
import { checkCookies, cleanCookie } from "../util/cookies";

interface UserState {
  uid: string;
  secret: string;
  authenticated: boolean;
}

const initialState: UserState = {
  uid: undefined,
  secret: undefined,
  authenticated: false,
};

const UserContext = createContext<UserState>(initialState);

function Provider({ children }: { children: ReactNode }) {
  const [userState, setUserState] = useState<UserState>(initialState);
  const [jwt, setJwt] = useState<string>("");

  useEffect(() => {
    const payload = decode(jwt) as AuthPayload;

    if (!payload) {
      return;
    }

    const { uid, userKey, exp } = payload;

    if (isTokenExpired(exp)) {
      setUserState({
        authenticated: false,
        uid: undefined,
        secret: undefined,
      });

      cleanCookie();

      return;
    }

    setUserState({
      uid,
      secret: userKey,
      authenticated: true,
    });
  }, [jwt]);

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
