import { PropsWithChildren } from "react";
import styles from "./header.module.css";

function Header({ children }: PropsWithChildren) {
  return <header className={styles.header}>{children}</header>;
}

export default Header;
