import React from "react";

type TData = {
  accessToken: string;
  username: string;
};

export interface IAuthContext {
  isAuthenticated: boolean;
  accessToken: string | null;
  username: string | null;
  logout: () => void;
  setData: (data: TData) => void;
}

const AuthContext = React.createContext<IAuthContext | null>(null);

export default AuthContext;
