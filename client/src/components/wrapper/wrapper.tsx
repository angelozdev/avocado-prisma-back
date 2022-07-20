import type { PropsWithChildren } from "react";
import styles from "./wrapper.module.css";

type Size = "sm" | "md" | "lg" | "xs";
type Props = PropsWithChildren<{ size?: Size; full?: boolean }>;

function Wrapper({ children, size = "md", full = false }: Props) {
  return (
    <div
      className={[
        styles["wrapper"],
        styles[size],
        full ? styles.full : "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default Wrapper;
