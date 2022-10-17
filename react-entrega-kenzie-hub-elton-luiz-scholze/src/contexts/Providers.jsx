import React from "react";
import { UserProvider } from "./UserContext";
import { TechProvider } from "./TechContext";

export function Providers({ children }) {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
}
