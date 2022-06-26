import type { PropsWithChildren } from "react";
import styles from "./wrapper.module.css";

type Size = "sm" | "md" | "lg";
type Props = PropsWithChildren<{ size?: Size }>;

function Wrapper({ children, size = "md" }: Props) {
  return (
    <div className={[styles["wrapper"], styles[size]].join(" ")}>
      {children}
    </div>
  );
}

export default Wrapper;
