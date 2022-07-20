import React, { PropsWithChildren } from "react";
import AuthContext, { IAuthContext } from "./context";

function AuthProvider({ children }: PropsWithChildren) {
  const [data, setData] = React.useState(() => {
    const token = window.localStorage.getItem("token") || null;
    const username = window.localStorage.getItem("username") || null;
    return { token, username };
  });

  const handleSetData = React.useCallback(
    ({ accessToken, username }: { accessToken: string; username: string }) => {
      window.localStorage.setItem("token", accessToken);
      window.localStorage.setItem("username", username);
      setData((prevData) => ({ ...prevData, token: accessToken, username }));
    },
    []
  );

  const logout = React.useCallback(() => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("username");
    setData({ token: null, username: null });
  }, []);

  const value: IAuthContext = React.useMemo(
    () => ({
      accessToken: data.token,
      isAuthenticated: !!data.token && !!data.username,
      logout,
      setData: handleSetData,
      username: data.username,
    }),
    [data.token, data.username, logout, handleSetData]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
