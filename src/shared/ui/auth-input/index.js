import { useState } from "react";
import styles from "./auth-input.module.css";

export default function AuthInput({ id, type = "text", placeholder, iconClass, ...rest }) {
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  const iconClassName = isPassword ? (showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash") : iconClass

  return (
    <div className={styles.wrapper}>
      <input type={inputType} autoComplete="off" name={id} id={id} placeholder={placeholder} {...rest} />
      <i className={iconClassName} onClick={() => setShowPassword(!showPassword)}></i>
    </div>
  );
}
