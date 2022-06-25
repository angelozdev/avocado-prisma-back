import type { PropsWithChildren } from "react";
import styles from "./wrapper.module.css";

function Wrapper({ children }: PropsWithChildren) {
  return <div className={styles["wrapper"]}>{children}</div>;
}

export default Wrapper;
