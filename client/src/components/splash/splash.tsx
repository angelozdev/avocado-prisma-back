import { Wrapper } from "../wrapper";
import styles from "./splash.module.css";

function Splash() {
  return (
    <div className={styles["container"]}>
      <Wrapper>
        <div className={styles["lds-hourglass"]} />
      </Wrapper>
    </div>
  );
}

export default Splash;
