import React from "react";
import { Navigate } from "@tanstack/react-location";

// components
import { Button } from "../";

// utils
import styles from "./login-form.module.css";
import { useLoginQuery } from "../../generated/graphql";
import { graphqlClient } from "../../lib";
import { Routes } from "../../routes/routes";
import { useAuth } from "../../hooks";

function LoginForm() {
  const { isAuthenticated, setData } = useAuth();
  const [fields, setFields] = React.useState({
    username: "",
    password: "",
  });

  const { refetch, isFetching, error } = useLoginQuery(
    graphqlClient,
    { password: fields.password, username: fields.username },
    {
      enabled: false,
      queryHash: "login",
      retry: false,
      staleTime: 1000 * 60 * 60 * 2,
    }
  );

  const errorMessage = error?.response.errors?.[0].message;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, isSuccess } = await refetch();
    const { accessToken, username } = data?.LogIn ?? {};
    if (accessToken && username && isSuccess)
      setData({ accessToken, username });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  if (isAuthenticated) {
    return <Navigate to={Routes.AVO_LIST} />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label}>
          <span className={styles.name}>Username</span>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your username"
            onChange={handleChange}
            name="username"
            required
            disabled={isFetching}
          />
        </label>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          <span className={styles.name}>Password</span>
          <input
            className={styles.input}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            disabled={isFetching}
          />
        </label>
      </div>

      {error && <div className={styles.error}>{errorMessage}</div>}

      <Button
        full
        disabled={!fields.password || !fields.username || isFetching}
        type="submit"
      >
        {isFetching ? "Loading..." : "Login"}
      </Button>
    </form>
  );
}

export default LoginForm;
