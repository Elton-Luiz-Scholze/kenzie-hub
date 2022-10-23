import React, { ReactNode } from "react";
import { UserProvider } from "./UserContext";
import { TechProvider } from "./TechContext";

interface iProvidersChildren {
  children: ReactNode;
}

export function Providers({ children } : iProvidersChildren) {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
}
