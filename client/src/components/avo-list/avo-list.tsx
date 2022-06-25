import { PropsWithChildren } from "react";
import styles from "./avo-list.module.css";

function AvoList({ children }: PropsWithChildren) {
  return <ul className={styles["list-container"]}>{children}</ul>;
}

export default AvoList;
