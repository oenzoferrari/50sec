import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";

import { useAuth } from "./User";

const RoutingContext = createContext({});

function Provider({ children }: { children: ReactNode }) {
  const { authenticated, token } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (authenticated && router.pathname !== "vault") {
      router.replace("/vault");
    } else if (router.pathname !== "/") {
      router.replace("/");
    }
  }, [authenticated, router.pathname]);

  return (
    <RoutingContext.Provider value={undefined}>
      {children}
    </RoutingContext.Provider>
  );
}

export default Provider;
