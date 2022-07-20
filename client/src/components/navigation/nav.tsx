import { Link } from "@tanstack/react-location";
import { useAuth } from "../../hooks";
import { Routes } from "../../routes/routes";
import { Button } from "../";
import styles from "./nav.module.css";

function Nav() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link
          className={styles.link}
          getActiveProps={() => ({ className: styles.active })}
          to={Routes.AVO_LIST}
        >
          Avo List
        </Link>
        {isAuthenticated ? (
          <Button onClick={logout}>Log Out</Button>
        ) : (
          <Link
            getActiveProps={() => ({ className: styles.active })}
            className={styles.link}
            to={Routes.LOGIN}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
