import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from "./button.module.css";

type NativeProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends PropsWithChildren<NativeProps> {
  full?: boolean;
}

function Button({ children, full, ...rest }: Props) {
  return (
    <button
      className={[styles.button, full && styles.full].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
