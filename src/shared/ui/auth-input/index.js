import styles from "./auth-input.module.css";

export default function AuthInput({ id, type = "text", placeholder, iconClass }) {
  return (
    <div className={styles.wrapper}>
      <input type={type} autoComplete="off" name={id} id={id} placeholder={placeholder} />
      <i className={iconClass}></i>
    </div>
  );
}
