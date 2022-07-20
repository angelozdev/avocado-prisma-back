import React from "react";
import { AuthContext } from "../contexts/auth";

function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}

export default useAuth;
